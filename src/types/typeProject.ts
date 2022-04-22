// Generated by https://quicktype.io

export interface Types {
    projects: Project[];
    skills:   SkillTech[];
}

export interface Project {
    image:       string;
    name:        string;
    description: string;
    usedSkills:  string[];
    repo:        string;
    url:         string;
    tech:        string;
    id:          number;
}

export interface SkillTech {
    image:      string;
    name:       string;
    experience: string;
}
