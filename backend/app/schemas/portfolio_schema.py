from pydantic import BaseModel, ConfigDict
from typing import List, Optional
from datetime import date, datetime


class BaseSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)


class PersonalInfoSchema(BaseSchema):
    id: int
    name: str
    first_name: str
    last_name: str
    mobile: str
    role: str
    tagline: str
    bio: str
    avatar_url: str
    resume_url: str


class SocialLinkSchema(BaseSchema):
    id: int
    github_url: str
    linkedin_url: str
    twitter_url: str
    email: str


class StatSchema(BaseSchema):
    id: int
    value: str
    label: str
    sub_label: str
    icon: str
    theme: str


class ServiceSchema(BaseSchema):
    id: int
    title: str
    description: str
    icon: str


class ExperienceSchema(BaseSchema):
    id: int
    role: str
    company: str
    start_date: date
    end_date: Optional[date]
    is_current: bool
    descriptions: List[str]
    tags: List[str]


class EducationSchema(BaseSchema):
    id: int
    degree: str
    school: str
    start_year: int
    end_year: int
    details: str


class ProjectSchema(BaseSchema):
    id: int
    title: str
    description: str
    image_url: str
    category: str
    demo_url: Optional[str]
    github_url: Optional[str]
    tags: List[str]


class SkillSchema(BaseSchema):
    id: int
    name: str
    proficiency: int


class SkillCategorySchema(BaseSchema):
    id: int
    category_name: str
    skills: List[SkillSchema]


class BlogSchema(BaseSchema):
    id: int
    title: str
    excerpt: str
    published_date: date
    read_time_minutes: int
    slug: str
    url: str


class CertificationSchema(BaseSchema):
    id: int
    title: str
    issuer: str
    credential_id: str
    verify_url: str


class MetaSchema(BaseSchema):
    created_at: datetime
    updated_at: datetime


class PortfolioSchema(BaseSchema):
    id: int
    personal_info: PersonalInfoSchema
    social_links: SocialLinkSchema
    stats: List[StatSchema]
    services: List[ServiceSchema]
    experiences: List[ExperienceSchema]
    education: List[EducationSchema]
    projects: List[ProjectSchema]
    skill_categories: List[SkillCategorySchema]
    blogs: List[BlogSchema]
    certifications: List[CertificationSchema]
    meta: MetaSchema