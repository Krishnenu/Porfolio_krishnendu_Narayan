from pydantic import BaseModel
from typing import List


class ResumeSchema(BaseModel):
    name: str
    role: str


class ExperienceItem(BaseModel):
    company: str
    role: str
    years: str


class ExperienceSchema(BaseModel):
    experience: List[ExperienceItem]


class ProjectItem(BaseModel):
    name: str


class ProjectSchema(BaseModel):
    projects: List[ProjectItem]


class SkillSchema(BaseModel):
    skills: List[str]


class BlogSchema(BaseModel):
    blogs: List[str]


class CertificationSchema(BaseModel):
    certifications: List[str]


class ContactSchema(BaseModel):
    email: str
    linkedin: str