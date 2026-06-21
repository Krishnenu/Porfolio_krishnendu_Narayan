from pydantic import BaseModel, ConfigDict
from typing import List, Optional
from datetime import date, datetime


class BaseSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)


class PersonalInfoSchema(BaseSchema):
    id: int
    name: Optional[str] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    mobile: Optional[str] = None
    role: Optional[str] = None
    tagline: Optional[str] = None
    bio: Optional[str] = None
    avatar_url: Optional[str] = None
    resume_url: Optional[str] = None


class SocialLinkSchema(BaseSchema):
    id: int
    github_url: Optional[str] = None
    linkedin_url: Optional[str] = None
    twitter_url: Optional[str] = None
    email: Optional[str] = None


class StatSchema(BaseSchema):
    id: int
    value: Optional[str] = None
    label: Optional[str] = None
    sub_label: Optional[str] = None
    icon: Optional[str] = None
    theme: Optional[str] = None


class ServiceSchema(BaseSchema):
    id: int
    title: Optional[str] = None
    description: Optional[str] = None
    icon: Optional[str] = None


class ExperienceSchema(BaseSchema):
    id: int
    role: Optional[str] = None
    company: Optional[str] = None
    start_date: Optional[date] = None
    end_date: Optional[date] = None
    is_current: Optional[bool] = None
    descriptions: List[str] = []
    tags: List[str] = []


class EducationSchema(BaseSchema):
    id: int
    degree: Optional[str] = None
    school: Optional[str] = None
    start_year: Optional[int] = None
    end_year: Optional[int] = None
    details: Optional[str] = None


class ProjectSchema(BaseSchema):
    id: int
    title: Optional[str] = None
    description: Optional[str] = None
    image_url: Optional[str] = None
    category: Optional[str] = None
    demo_url: Optional[str] = None
    github_url: Optional[str] = None
    tags: List[str] = []


class SkillSchema(BaseSchema):
    id: int
    name: Optional[str] = None
    proficiency: Optional[int] = None


class SkillCategorySchema(BaseSchema):
    id: int
    category_name: Optional[str] = None
    skills: List[SkillSchema] = []


class BlogSchema(BaseSchema):
    id: int
    title: Optional[str] = None
    excerpt: Optional[str] = None
    published_date: Optional[date] = None
    read_time_minutes: Optional[int] = None
    slug: Optional[str] = None
    url: Optional[str] = None


class CertificationSchema(BaseSchema):
    id: int
    title: Optional[str] = None
    issuer: Optional[str] = None
    credential_id: Optional[str] = None
    verify_url: Optional[str] = None


class MetaSchema(BaseSchema):
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None


class PortfolioSchema(BaseSchema):
    id: int
    personal_info: Optional[PersonalInfoSchema] = None
    social_links: Optional[SocialLinkSchema] = None
    stats: List[StatSchema] = []
    services: List[ServiceSchema] = []
    experiences: List[ExperienceSchema] = []
    education: List[EducationSchema] = []
    projects: List[ProjectSchema] = []
    skill_categories: List[SkillCategorySchema] = []
    blogs: List[BlogSchema] = []
    certifications: List[CertificationSchema] = []
    meta: Optional[MetaSchema] = None