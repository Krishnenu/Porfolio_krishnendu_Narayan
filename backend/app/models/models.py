from typing import Optional
import datetime

from sqlalchemy import Date, DateTime, ForeignKeyConstraint, Identity, Index, Integer, PrimaryKeyConstraint, String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.db.database import Base



class Portfolios(Base):
    __tablename__ = 'portfolios'
    __table_args__ = (
        PrimaryKeyConstraint('id', name='PK__portfoli__3213E83F3E78A966'),
        Index('ix_portfolios_id', 'id', mssql_clustered=False)
    )

    id: Mapped[int] = mapped_column(Integer, Identity(start=1, increment=1), primary_key=True, autoincrement=True)
    created_at: Mapped[Optional[datetime.datetime]] = mapped_column(DateTime)
    updated_at: Mapped[Optional[datetime.datetime]] = mapped_column(DateTime)

    blogs: Mapped[list['Blogs']] = relationship('Blogs', back_populates='portfolio')
    certifications: Mapped[list['Certifications']] = relationship('Certifications', back_populates='portfolio')
    education: Mapped[list['Education']] = relationship('Education', back_populates='portfolio')
    experiences: Mapped[list['Experiences']] = relationship('Experiences', back_populates='portfolio')
    personal_info: Mapped[list['PersonalInfo']] = relationship('PersonalInfo', back_populates='portfolio')
    projects: Mapped[list['Projects']] = relationship('Projects', back_populates='portfolio')
    services: Mapped[list['Services']] = relationship('Services', back_populates='portfolio')
    skill_categories: Mapped[list['SkillCategories']] = relationship('SkillCategories', back_populates='portfolio')
    social_links: Mapped[list['SocialLinks']] = relationship('SocialLinks', back_populates='portfolio')
    stats: Mapped[list['Stats']] = relationship('Stats', back_populates='portfolio')


class Blogs(Base):
    __tablename__ = 'blogs'
    __table_args__ = (
        ForeignKeyConstraint(['portfolio_id'], ['portfolios.id'], name='FK__blogs__portfolio__75A278F5'),
        PrimaryKeyConstraint('id', name='PK__blogs__3213E83FF01CF2FF')
    )

    id: Mapped[int] = mapped_column(Integer, Identity(start=1, increment=1), primary_key=True, autoincrement=True)
    portfolio_id: Mapped[Optional[int]] = mapped_column(Integer)
    title: Mapped[Optional[str]] = mapped_column(String(255, 'SQL_Latin1_General_CP1_CI_AS'))
    excerpt: Mapped[Optional[str]] = mapped_column(String(collation='SQL_Latin1_General_CP1_CI_AS'))
    published_date: Mapped[Optional[datetime.date]] = mapped_column(Date)
    read_time_minutes: Mapped[Optional[int]] = mapped_column(Integer)
    slug: Mapped[Optional[str]] = mapped_column(String(255, 'SQL_Latin1_General_CP1_CI_AS'))
    url: Mapped[Optional[str]] = mapped_column(String(collation='SQL_Latin1_General_CP1_CI_AS'))

    portfolio: Mapped[Optional['Portfolios']] = relationship('Portfolios', back_populates='blogs')


class Certifications(Base):
    __tablename__ = 'certifications'
    __table_args__ = (
        ForeignKeyConstraint(['portfolio_id'], ['portfolios.id'], name='FK__certifica__portf__787EE5A0'),
        PrimaryKeyConstraint('id', name='PK__certific__3213E83F953A5AA1')
    )

    id: Mapped[int] = mapped_column(Integer, Identity(start=1, increment=1), primary_key=True, autoincrement=True)
    portfolio_id: Mapped[Optional[int]] = mapped_column(Integer)
    title: Mapped[Optional[str]] = mapped_column(String(255, 'SQL_Latin1_General_CP1_CI_AS'))
    issuer: Mapped[Optional[str]] = mapped_column(String(100, 'SQL_Latin1_General_CP1_CI_AS'))
    credential_id: Mapped[Optional[str]] = mapped_column(String(255, 'SQL_Latin1_General_CP1_CI_AS'))
    verify_url: Mapped[Optional[str]] = mapped_column(String(collation='SQL_Latin1_General_CP1_CI_AS'))

    portfolio: Mapped[Optional['Portfolios']] = relationship('Portfolios', back_populates='certifications')


class Education(Base):
    __tablename__ = 'education'
    __table_args__ = (
        ForeignKeyConstraint(['portfolio_id'], ['portfolios.id'], name='FK__education__portf__6D0D32F4'),
        PrimaryKeyConstraint('id', name='PK__educatio__3213E83FA9FA1F87')
    )

    id: Mapped[int] = mapped_column(Integer, Identity(start=1, increment=1), primary_key=True, autoincrement=True)
    portfolio_id: Mapped[Optional[int]] = mapped_column(Integer)
    degree: Mapped[Optional[str]] = mapped_column(String(255, 'SQL_Latin1_General_CP1_CI_AS'))
    school: Mapped[Optional[str]] = mapped_column(String(255, 'SQL_Latin1_General_CP1_CI_AS'))
    start_year: Mapped[Optional[int]] = mapped_column(Integer)
    end_year: Mapped[Optional[int]] = mapped_column(Integer)
    details: Mapped[Optional[str]] = mapped_column(String(collation='SQL_Latin1_General_CP1_CI_AS'))

    portfolio: Mapped[Optional['Portfolios']] = relationship('Portfolios', back_populates='education')


class Experiences(Base):
    __tablename__ = 'experiences'
    __table_args__ = (
        ForeignKeyConstraint(['portfolio_id'], ['portfolios.id'], name='FK__experienc__portf__6A30C649'),
        PrimaryKeyConstraint('id', name='PK__experien__3213E83F3DB3A87A')
    )

    id: Mapped[int] = mapped_column(Integer, Identity(start=1, increment=1), primary_key=True, autoincrement=True)
    portfolio_id: Mapped[Optional[int]] = mapped_column(Integer)
    role: Mapped[Optional[str]] = mapped_column(String(150, 'SQL_Latin1_General_CP1_CI_AS'))
    company: Mapped[Optional[str]] = mapped_column(String(150, 'SQL_Latin1_General_CP1_CI_AS'))
    start_date: Mapped[Optional[datetime.date]] = mapped_column(Date)
    end_date: Mapped[Optional[datetime.date]] = mapped_column(Date)

    portfolio: Mapped[Optional['Portfolios']] = relationship('Portfolios', back_populates='experiences')
    experience_descriptions: Mapped[list['ExperienceDescriptions']] = relationship('ExperienceDescriptions', back_populates='experience')
    experience_tags: Mapped[list['ExperienceTags']] = relationship('ExperienceTags', back_populates='experience')


class PersonalInfo(Base):
    __tablename__ = 'personal_info'
    __table_args__ = (
        ForeignKeyConstraint(['portfolio_id'], ['portfolios.id'], name='FK__personal___portf__5EBF139D'),
        PrimaryKeyConstraint('id', name='PK__personal__3213E83FDCCB6D9F')
    )

    id: Mapped[int] = mapped_column(Integer, Identity(start=1, increment=1), primary_key=True, autoincrement=True)
    portfolio_id: Mapped[Optional[int]] = mapped_column(Integer)
    name: Mapped[Optional[str]] = mapped_column(String(100, 'SQL_Latin1_General_CP1_CI_AS'))
    first_name: Mapped[Optional[str]] = mapped_column(String(50, 'SQL_Latin1_General_CP1_CI_AS'))
    last_name: Mapped[Optional[str]] = mapped_column(String(50, 'SQL_Latin1_General_CP1_CI_AS'))
    mobile: Mapped[Optional[str]] = mapped_column(String(20, 'SQL_Latin1_General_CP1_CI_AS'))
    role: Mapped[Optional[str]] = mapped_column(String(150, 'SQL_Latin1_General_CP1_CI_AS'))
    tagline: Mapped[Optional[str]] = mapped_column(String(collation='SQL_Latin1_General_CP1_CI_AS'))
    bio: Mapped[Optional[str]] = mapped_column(String(collation='SQL_Latin1_General_CP1_CI_AS'))
    avatar_url: Mapped[Optional[str]] = mapped_column(String(collation='SQL_Latin1_General_CP1_CI_AS'))
    resume_url: Mapped[Optional[str]] = mapped_column(String(collation='SQL_Latin1_General_CP1_CI_AS'))

    portfolio: Mapped[Optional['Portfolios']] = relationship('Portfolios', back_populates='personal_info')


class Projects(Base):
    __tablename__ = 'projects'
    __table_args__ = (
        ForeignKeyConstraint(['portfolio_id'], ['portfolios.id'], name='FK__projects__portfo__6FE99F9F'),
        PrimaryKeyConstraint('id', name='PK__projects__3213E83F2B3C2311')
    )

    id: Mapped[int] = mapped_column(Integer, Identity(start=1, increment=1), primary_key=True, autoincrement=True)
    portfolio_id: Mapped[Optional[int]] = mapped_column(Integer)
    title: Mapped[Optional[str]] = mapped_column(String(255, 'SQL_Latin1_General_CP1_CI_AS'))
    description: Mapped[Optional[str]] = mapped_column(String(collation='SQL_Latin1_General_CP1_CI_AS'))
    image_url: Mapped[Optional[str]] = mapped_column(String(collation='SQL_Latin1_General_CP1_CI_AS'))
    category: Mapped[Optional[str]] = mapped_column(String(50, 'SQL_Latin1_General_CP1_CI_AS'))
    demo_url: Mapped[Optional[str]] = mapped_column(String(collation='SQL_Latin1_General_CP1_CI_AS'))
    github_url: Mapped[Optional[str]] = mapped_column(String(collation='SQL_Latin1_General_CP1_CI_AS'))

    portfolio: Mapped[Optional['Portfolios']] = relationship('Portfolios', back_populates='projects')
    project_tags: Mapped[list['ProjectTags']] = relationship('ProjectTags', back_populates='project')


class Services(Base):
    __tablename__ = 'services'
    __table_args__ = (
        ForeignKeyConstraint(['portfolio_id'], ['portfolios.id'], name='FK__services__portfo__6754599E'),
        PrimaryKeyConstraint('id', name='PK__services__3213E83FA8B00B5A')
    )

    id: Mapped[int] = mapped_column(Integer, Identity(start=1, increment=1), primary_key=True, autoincrement=True)
    portfolio_id: Mapped[Optional[int]] = mapped_column(Integer)
    title: Mapped[Optional[str]] = mapped_column(String(255, 'SQL_Latin1_General_CP1_CI_AS'))
    description: Mapped[Optional[str]] = mapped_column(String(collation='SQL_Latin1_General_CP1_CI_AS'))
    icon: Mapped[Optional[str]] = mapped_column(String(50, 'SQL_Latin1_General_CP1_CI_AS'))

    portfolio: Mapped[Optional['Portfolios']] = relationship('Portfolios', back_populates='services')


class SkillCategories(Base):
    __tablename__ = 'skill_categories'
    __table_args__ = (
        ForeignKeyConstraint(['portfolio_id'], ['portfolios.id'], name='FK__skill_cat__portf__72C60C4A'),
        PrimaryKeyConstraint('id', name='PK__skill_ca__3213E83F80A153DC')
    )

    id: Mapped[int] = mapped_column(Integer, Identity(start=1, increment=1), primary_key=True, autoincrement=True)
    portfolio_id: Mapped[Optional[int]] = mapped_column(Integer)
    category_name: Mapped[Optional[str]] = mapped_column(String(100, 'SQL_Latin1_General_CP1_CI_AS'))

    portfolio: Mapped[Optional['Portfolios']] = relationship('Portfolios', back_populates='skill_categories')
    skills: Mapped[list['Skills']] = relationship('Skills', back_populates='category')


class SocialLinks(Base):
    __tablename__ = 'social_links'
    __table_args__ = (
        ForeignKeyConstraint(['portfolio_id'], ['portfolios.id'], name='FK__social_li__portf__619B8048'),
        PrimaryKeyConstraint('id', name='PK__social_l__3213E83F46415601')
    )

    id: Mapped[int] = mapped_column(Integer, Identity(start=1, increment=1), primary_key=True, autoincrement=True)
    portfolio_id: Mapped[Optional[int]] = mapped_column(Integer)
    github_url: Mapped[Optional[str]] = mapped_column(String(255, 'SQL_Latin1_General_CP1_CI_AS'))
    linkedin_url: Mapped[Optional[str]] = mapped_column(String(255, 'SQL_Latin1_General_CP1_CI_AS'))
    twitter_url: Mapped[Optional[str]] = mapped_column(String(255, 'SQL_Latin1_General_CP1_CI_AS'))
    email: Mapped[Optional[str]] = mapped_column(String(255, 'SQL_Latin1_General_CP1_CI_AS'))

    portfolio: Mapped[Optional['Portfolios']] = relationship('Portfolios', back_populates='social_links')


class Stats(Base):
    __tablename__ = 'stats'
    __table_args__ = (
        ForeignKeyConstraint(['portfolio_id'], ['portfolios.id'], name='FK__stats__portfolio__6477ECF3'),
        PrimaryKeyConstraint('id', name='PK__stats__3213E83F11A58907')
    )

    id: Mapped[int] = mapped_column(Integer, Identity(start=1, increment=1), primary_key=True, autoincrement=True)
    portfolio_id: Mapped[Optional[int]] = mapped_column(Integer)
    value: Mapped[Optional[str]] = mapped_column(String(50, 'SQL_Latin1_General_CP1_CI_AS'))
    label: Mapped[Optional[str]] = mapped_column(String(100, 'SQL_Latin1_General_CP1_CI_AS'))
    sub_label: Mapped[Optional[str]] = mapped_column(String(100, 'SQL_Latin1_General_CP1_CI_AS'))
    icon: Mapped[Optional[str]] = mapped_column(String(50, 'SQL_Latin1_General_CP1_CI_AS'))
    theme: Mapped[Optional[str]] = mapped_column(String(20, 'SQL_Latin1_General_CP1_CI_AS'))

    portfolio: Mapped[Optional['Portfolios']] = relationship('Portfolios', back_populates='stats')


class ExperienceDescriptions(Base):
    __tablename__ = 'experience_descriptions'
    __table_args__ = (
        ForeignKeyConstraint(['experience_id'], ['experiences.id'], name='FK__experienc__exper__7B5B524B'),
        PrimaryKeyConstraint('id', name='PK__experien__3213E83FACD66652')
    )

    id: Mapped[int] = mapped_column(Integer, Identity(start=1, increment=1), primary_key=True, autoincrement=True)
    experience_id: Mapped[Optional[int]] = mapped_column(Integer)
    description: Mapped[Optional[str]] = mapped_column(String(collation='SQL_Latin1_General_CP1_CI_AS'))

    experience: Mapped[Optional['Experiences']] = relationship('Experiences', back_populates='experience_descriptions')


class ExperienceTags(Base):
    __tablename__ = 'experience_tags'
    __table_args__ = (
        ForeignKeyConstraint(['experience_id'], ['experiences.id'], name='FK__experienc__exper__7E37BEF6'),
        PrimaryKeyConstraint('id', name='PK__experien__3213E83F227DCD92')
    )

    id: Mapped[int] = mapped_column(Integer, Identity(start=1, increment=1), primary_key=True, autoincrement=True)
    experience_id: Mapped[Optional[int]] = mapped_column(Integer)
    name: Mapped[Optional[str]] = mapped_column(String(100, 'SQL_Latin1_General_CP1_CI_AS'))

    experience: Mapped[Optional['Experiences']] = relationship('Experiences', back_populates='experience_tags')


class ProjectTags(Base):
    __tablename__ = 'project_tags'
    __table_args__ = (
        ForeignKeyConstraint(['project_id'], ['projects.id'], name='FK__project_t__proje__01142BA1'),
        PrimaryKeyConstraint('id', name='PK__project___3213E83F1526729A')
    )

    id: Mapped[int] = mapped_column(Integer, Identity(start=1, increment=1), primary_key=True, autoincrement=True)
    project_id: Mapped[Optional[int]] = mapped_column(Integer)
    name: Mapped[Optional[str]] = mapped_column(String(100, 'SQL_Latin1_General_CP1_CI_AS'))

    project: Mapped[Optional['Projects']] = relationship('Projects', back_populates='project_tags')


class Skills(Base):
    __tablename__ = 'skills'
    __table_args__ = (
        ForeignKeyConstraint(['category_id'], ['skill_categories.id'], name='FK__skills__category__03F0984C'),
        PrimaryKeyConstraint('id', name='PK__skills__3213E83FD1D82CFC')
    )

    id: Mapped[int] = mapped_column(Integer, Identity(start=1, increment=1), primary_key=True, autoincrement=True)
    category_id: Mapped[Optional[int]] = mapped_column(Integer)
    name: Mapped[Optional[str]] = mapped_column(String(100, 'SQL_Latin1_General_CP1_CI_AS'))
    proficiency: Mapped[Optional[int]] = mapped_column(Integer)

    category: Mapped[Optional['SkillCategories']] = relationship('SkillCategories', back_populates='skills')
