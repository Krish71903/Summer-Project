from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from ..db.supabase import create_user, get_user_by_email, update_last_login, login_user
import traceback

router = APIRouter()

class SignupRequest(BaseModel):
    email: EmailStr
    password: str
    full_name: str

class SignupResponse(BaseModel):
    message: str
    user_id: str

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class LoginResponse(BaseModel):
    message: str
    user: dict
    session: dict

@router.post("/signup", response_model=SignupResponse)
async def signup(request: SignupRequest):
    try:
        # Check if user already exists
        existing_user = await get_user_by_email(request.email)
        if existing_user:
            raise HTTPException(status_code=400, detail="Email already registered")

        # Create new user
        user = await create_user(
            email=request.email,
            password=request.password,
            full_name=request.full_name
        )

        return SignupResponse(
            message="User created successfully",
            user_id=user["id"]
        )
    except ValueError as e:
        print(f"ValueError during signup: {str(e)}")
        print(f"Traceback: {traceback.format_exc()}")
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        print(f"Unexpected error during signup: {str(e)}")
        print(f"Traceback: {traceback.format_exc()}")
        raise HTTPException(status_code=500, detail=f"An error occurred during signup: {str(e)}")

@router.post("/login", response_model=LoginResponse)
async def login(request: LoginRequest):
    try:
        # Attempt to login user
        result = await login_user(request.email, request.password)
        
        # Convert session to dictionary
        session_dict = {
            "access_token": result["session"].access_token,
            "refresh_token": result["session"].refresh_token,
            "expires_at": result["session"].expires_at,
            "user_id": result["session"].user.id
        }
        
        return LoginResponse(
            message="Login successful",
            user=result["user"],
            session=session_dict
        )
    except ValueError as e:
        print(f"ValueError during login: {str(e)}")
        print(f"Traceback: {traceback.format_exc()}")
        raise HTTPException(status_code=401, detail=str(e))
    except Exception as e:
        print(f"Unexpected error during login: {str(e)}")
        print(f"Traceback: {traceback.format_exc()}")
        raise HTTPException(status_code=500, detail=f"An error occurred during login: {str(e)}")