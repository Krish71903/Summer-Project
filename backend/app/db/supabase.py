from supabase import create_client, Client
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise ValueError("Missing Supabase credentials in environment variables")

# Initialize Supabase client
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Database operations
async def get_user_by_email(email: str):
    """Fetch user by email from Supabase."""
    response = supabase.table("users").select("*").eq("email", email).execute()
    return response.data[0] if response.data else None

async def create_user(email: str, password: str, full_name: str):
    """Create a new user in Supabase."""
    # First, create auth user
    auth_response = supabase.auth.sign_up({
        "email": email,
        "password": password
    })
    
    if not auth_response.user:
        raise ValueError("Failed to create auth user")
    
    # Then, store additional user data
    user_data = {
        "id": auth_response.user.id,
        "email": email,
        "full_name": full_name,
        "is_active": True,
        "is_premium": False
    }
    
    response = supabase.table("users").insert(user_data).execute()
    return response.data[0]

async def update_user_premium_status(user_id: str, is_premium: bool):
    """Update user's premium status."""
    response = supabase.table("users").update(
        {"is_premium": is_premium}
    ).eq("id", user_id).execute()
    
    return response.data[0]

async def update_last_login(user_id: str):
    """Update user's last login timestamp."""
    response = supabase.table("users").update(
        {"last_login": "now()"}
    ).eq("id", user_id).execute()
    
    return response.data[0]

async def login_user(email: str, password: str):
    """Authenticate user with Supabase."""
    try:
        # Sign in with Supabase Auth
        auth_response = supabase.auth.sign_in_with_password({
            "email": email,
            "password": password
        })
        
        if not auth_response.user:
            raise ValueError("Invalid credentials")
            
        # Get user data from users table
        user_data = await get_user_by_email(email)
        if not user_data:
            raise ValueError("User data not found")
            
        # Update last login
        await update_last_login(auth_response.user.id)
        
        return {
            "user": user_data,
            "session": auth_response.session
        }
    except Exception as e:
        raise ValueError(f"Login failed: {str(e)}")