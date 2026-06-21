from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.portfolio_schema import PortfolioSchema
from app.dependencies.database import get_db
from app.models.models import (
    Portfolios as Portfolio,
    PersonalInfo,
    SocialLinks as SocialLink,
    Stats as Stat,
    Services as Service,
    Experiences as Experience,
    ExperienceDescriptions as ExperienceDescription,
    ExperienceTags as ExperienceTag,
    Education,
    Projects as Project,
    ProjectTags as ProjectTag,
    SkillCategories as SkillCategory,
    Blogs as Blog,
    Certifications as Certification
)

router = APIRouter( tags=["Portfolio"])


@router.get("/",response_model=PortfolioSchema)
def get_portfolio(db: Session = Depends(get_db)):
    portfolio = db.query(Portfolio).first()

    if not portfolio:
        raise HTTPException(status_code=404, detail="Portfolio not found")

    personal = db.query(PersonalInfo).filter(
        PersonalInfo.portfolio_id == portfolio.id
    ).first()

    social = db.query(SocialLink).filter(
        SocialLink.portfolio_id == portfolio.id
    ).first()

    stats = db.query(Stat).filter(
        Stat.portfolio_id == portfolio.id
    ).all()

    services = db.query(Service).filter(
        Service.portfolio_id == portfolio.id
    ).all()

    experiences = db.query(Experience).filter(
        Experience.portfolio_id == portfolio.id
    ).all()

    education = db.query(Education).filter(
        Education.portfolio_id == portfolio.id
    ).all()

    projects = db.query(Project).filter(
        Project.portfolio_id == portfolio.id
    ).all()

    skill_categories = db.query(SkillCategory).filter(
        SkillCategory.portfolio_id == portfolio.id
    ).all()

    blogs = db.query(Blog).filter(
        Blog.portfolio_id == portfolio.id
    ).all()

    certifications = db.query(Certification).filter(
        Certification.portfolio_id == portfolio.id
    ).all()

    experience_response = []
    for exp in experiences:
        descriptions = db.query(ExperienceDescription).filter(
            ExperienceDescription.experience_id == exp.id
        ).all()

        tags = db.query(ExperienceTag).filter(
            ExperienceTag.experience_id == exp.id
        ).all()

        experience_response.append({
            "id": exp.id,
            "role": exp.role,
            "company": exp.company,
            "start_date": exp.start_date,
            "end_date": exp.end_date,
            "is_current": exp.end_date is None,
            "descriptions": [d.description for d in descriptions],
            "tags": [t.name for t in tags]
        })

    project_response = []
    for project in projects:
        tags = db.query(ProjectTag).filter(
            ProjectTag.project_id == project.id
        ).all()

        project_response.append({
            "id": project.id,
            "title": project.title,
            "description": project.description,
            "image_url": project.image_url,
            "category": project.category,
            "demo_url": project.demo_url,
            "github_url": project.github_url,
            "tags": [t.name for t in tags]
        })

    skill_response = []
    for category in skill_categories:
        skill_response.append({
            "id": category.id,
            "category_name": category.category_name,
            "skills": [
                {
                    "id": skill.id,
                    "name": skill.name,
                    "proficiency": skill.proficiency
                }
                for skill in category.skills
            ]
        })

    return {
        "id": portfolio.id,

        "personal_info": {
            "id": personal.id,
            "name": personal.name,
            "first_name": personal.first_name,
            "last_name": personal.last_name,
            "mobile": personal.mobile,
            "role": personal.role,
            "tagline": personal.tagline,
            "bio": personal.bio,
            "avatar_url": personal.avatar_url,
            "resume_url": personal.resume_url
        } if personal else None,

        "social_links": {
            "id": social.id,
            "github_url": social.github_url,
            "linkedin_url": social.linkedin_url,
            "twitter_url": social.twitter_url,
            "email": social.email
        } if social else None,

        "stats": [
            {
                "id": stat.id,
                "value": stat.value,
                "label": stat.label,
                "sub_label": stat.sub_label,
                "icon": stat.icon,
                "theme": stat.theme
            }
            for stat in stats
        ],

        "services": [
            {
                "id": service.id,
                "title": service.title,
                "description": service.description,
                "icon": service.icon
            }
            for service in services
        ],

        "experiences": experience_response,

        "education": [
            {
                "id": edu.id,
                "degree": edu.degree,
                "school": edu.school,
                "start_year": edu.start_year,
                "end_year": edu.end_year,
                "details": edu.details
            }
            for edu in education
        ],

        "projects": project_response,

        "skill_categories": skill_response,

        "blogs": [
            {
                "id": blog.id,
                "title": blog.title,
                "excerpt": blog.excerpt,
                "published_date": blog.published_date,
                "read_time_minutes": blog.read_time_minutes,
                "slug": blog.slug,
                "url": blog.url
            }
            for blog in blogs
        ],

        "certifications": [
            {
                "id": cert.id,
                "title": cert.title,
                "issuer": cert.issuer,
                "credential_id": cert.credential_id,
                "verify_url": cert.verify_url
            }
            for cert in certifications
        ],

        "meta": {
            "created_at": portfolio.created_at,
            "updated_at": portfolio.updated_at
        }
    }