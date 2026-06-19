from sqlalchemy import Column, Integer, String, Text, ForeignKey, Date, DateTime
from sqlalchemy.sql import func
from app.db.database import Base


class Portfolio(Base):
    __tablename__ = "portfolios"

    id = Column(Integer, primary_key=True, index=True)

    created_at = Column(DateTime, default=func.now())
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())


class PersonalInfo(Base):
    __tablename__ = "personal_info"

    id = Column(Integer, primary_key=True, index=True)
    portfolio_id = Column(Integer, ForeignKey("portfolios.id"))
    name = Column(String(100))
    first_name = Column(String(50))
    last_name = Column(String(50))
    mobile = Column(String(20))
    role = Column(String(150))
    tagline = Column(Text)
    bio = Column(Text)
    avatar_url = Column(Text)
    cv_url = Column(Text)


class SocialLink(Base):
    __tablename__ = "social_links"

    id = Column(Integer, primary_key=True, index=True)
    portfolio_id = Column(Integer, ForeignKey("portfolios.id"))
    github = Column(String(255))
    linkedin = Column(String(255))
    twitter = Column(String(255))
    email = Column(String(255))


class Stat(Base):
    __tablename__ = "stats"

    id = Column(Integer, primary_key=True, index=True)
    portfolio_id = Column(Integer, ForeignKey("portfolios.id"))
    value = Column(String(50))
    label = Column(String(100))
    sublabel = Column(String(100))
    icon = Column(String(50))
    color_theme = Column(String(20))


class Service(Base):
    __tablename__ = "services"

    id = Column(Integer, primary_key=True, index=True)
    portfolio_id = Column(Integer, ForeignKey("portfolios.id"))
    title = Column(String(255))
    description = Column(Text)
    icon = Column(String(50))


class Experience(Base):
    __tablename__ = "experiences"

    id = Column(Integer, primary_key=True, index=True)
    portfolio_id = Column(Integer, ForeignKey("portfolios.id"))
    role = Column(String(150))
    company = Column(String(150))
    period = Column(String(100))


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    portfolio_id = Column(Integer, ForeignKey("portfolios.id"))
    title = Column(String(255))
    description = Column(Text)
    image_url = Column(Text)
    category = Column(String(50))
    demo_url = Column(Text)
    github_url = Column(Text)


class Skill(Base):
    __tablename__ = "skills"

    id = Column(Integer, primary_key=True, index=True)
    portfolio_id = Column(Integer, ForeignKey("portfolios.id"))
    category = Column(String(100))
    name = Column(String(100))
    level = Column(Integer)


class Blog(Base):
    __tablename__ = "blogs"

    id = Column(Integer, primary_key=True, index=True)
    portfolio_id = Column(Integer, ForeignKey("portfolios.id"))
    title = Column(String(255))
    excerpt = Column(Text)
    publish_date = Column(Date)
    read_time = Column(String(50))
    slug = Column(String(255))
    url = Column(Text)


class Certification(Base):
    __tablename__ = "certifications"

    id = Column(Integer, primary_key=True, index=True)
    portfolio_id = Column(Integer, ForeignKey("portfolios.id"))
    title = Column(String(255))
    issuer = Column(String(100))
    issue_date = Column(String(50))
    credential_id = Column(String(255))
    verify_url = Column(Text)