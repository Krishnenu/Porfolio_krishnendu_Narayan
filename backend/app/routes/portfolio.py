from fastapi import APIRouter
from app.schemas.portfolio_schema import (
    ResumeSchema,
    ExperienceSchema,
    ProjectSchema,
    SkillSchema,
    BlogSchema,
    CertificationSchema,
    ContactSchema
)

router = APIRouter()


@router.get("/")
def home():
    return {"message": "Portfolio Backend Running"}


@router.get("/resume", response_model=ResumeSchema)
def get_resume():
    return {
        "name": "Krishnendu Narayan",
        "role": "Full Stack GenAI Developer"
    }

# @router.post("/resume")
# def create_resume(payload: ResumeCreateSchema):
#     global resume_db
#     resume_db = payload.model_dump()

#     return {
#         "message": "Resume created successfully",
#         "data": resume_db
#     }

@router.get("/experience", response_model=ExperienceSchema)
def get_experience():
    return {
        "experience": [
            {
                "company": "Infovision Labs",
                "role": "Technical Specialist",
                "years": "2025-2026"
            }
        ]
    }


@router.get("/projects", response_model=ProjectSchema)
def get_projects():
    return {
        "projects": [
            {"name": "Portfolio Website"},
            {"name": "RAG Chatbot"}
        ]
    }


@router.get("/skills", response_model=SkillSchema)
def get_skills():
    return {
        "skills": ["React", "FastAPI", "Python", "LangChain"]
    }


@router.get("/blog", response_model=BlogSchema)
def get_blog():
    return {
        "blogs": []
    }


@router.get("/certifications", response_model=CertificationSchema)
def get_certifications():
    return {
        "certifications": []
    }


@router.get("/contact", response_model=ContactSchema)
def get_contact():
    return {
        "email": "example@gmail.com",
        "linkedin": "linkedin-url"
    }