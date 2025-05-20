"use client"

import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"

interface DemoRoadmapProps {
  subject: string
  level: string
}

export default function DemoRoadmap({ subject, level }: DemoRoadmapProps) {
  const [roadmap, setRoadmap] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)

  // Sample roadmap data for demo purposes
  const sampleRoadmaps: Record<string, Record<string, string>> = {
    business: {
      basic: `# Business Fundamentals Roadmap (Basic Level)

## 1. Introduction to Business Concepts (2 weeks)
* **Key Skills**: Understanding business terminology, identifying business structures
* **Prerequisites**: None
* **Resources**: "Business Basics" by John Smith, Coursera "Introduction to Business"

## 2. Marketing Fundamentals (3 weeks)
* **Key Skills**: Understanding customer needs, basic market research, value proposition
* **Prerequisites**: Business concepts
* **Resources**: "Marketing 101" by Sarah Johnson, HubSpot Academy free courses

## 3. Financial Literacy (4 weeks)
* **Key Skills**: Reading financial statements, budgeting, understanding revenue and costs
* **Prerequisites**: Basic math
* **Resources**: "Financial Intelligence" by Karen Berman, Khan Academy Finance courses

## 4. Business Communication (2 weeks)
* **Key Skills**: Professional writing, presentation skills, email etiquette
* **Prerequisites**: None
* **Resources**: "Business Communication" by Mary Ellen Guffey, LinkedIn Learning courses

## 5. Introduction to Management (3 weeks)
* **Key Skills**: Team coordination, basic leadership, time management
* **Prerequisites**: Business concepts
* **Resources**: "Management Basics" by Robert Davis, edX "Principles of Management"`,
      intermediate: `# Business Strategy Roadmap (Intermediate Level)

## 1. Strategic Management (4 weeks)
* **Key Skills**: SWOT analysis, competitive positioning, strategic planning
* **Prerequisites**: Business fundamentals, basic marketing
* **Resources**: "Strategic Management" by Frank Rothaermel, Coursera "Strategic Management"

## 2. Advanced Marketing & Sales (4 weeks)
* **Key Skills**: Marketing strategy, sales funnel optimization, customer journey mapping
* **Prerequisites**: Marketing fundamentals
* **Resources**: "Marketing Strategy" by Alexander Chernev, HubSpot Sales Certification

## 3. Financial Management (5 weeks)
* **Key Skills**: Financial analysis, investment evaluation, cash flow management
* **Prerequisites**: Financial literacy
* **Resources**: "Corporate Finance" by Jonathan Berk, Udemy "Financial Management"

## 4. Operations Management (3 weeks)
* **Key Skills**: Process optimization, supply chain management, quality control
* **Prerequisites**: Management basics
* **Resources**: "Operations Management" by Nigel Slack, edX "Supply Chain Management"

## 5. Business Analytics (4 weeks)
* **Key Skills**: Data analysis, KPI tracking, business intelligence tools
* **Prerequisites**: Basic statistics, spreadsheet proficiency
* **Resources**: "Data Science for Business" by Foster Provost, Google Analytics Academy`,
      advanced: `# Advanced Business Leadership Roadmap (Advanced Level)

## 1. Corporate Strategy & Innovation (5 weeks)
* **Key Skills**: Disruptive innovation, blue ocean strategy, corporate venturing
* **Prerequisites**: Strategic management, business model design
* **Resources**: "The Innovator's Dilemma" by Clayton Christensen, Harvard Business School Online

## 2. Global Business Management (4 weeks)
* **Key Skills**: International market entry, cross-cultural management, global supply chains
* **Prerequisites**: Operations management, strategic management
* **Resources**: "International Business" by Charles Hill, INSEAD Global Leadership courses

## 3. Advanced Financial Strategy (6 weeks)
* **Key Skills**: Valuation methods, M&A strategy, capital structure optimization
* **Prerequisites**: Financial management
* **Resources**: "Investment Banking" by Joshua Rosenbaum, Financial Times advanced courses

## 4. Organizational Leadership & Change Management (4 weeks)
* **Key Skills**: Transformational leadership, organizational development, change implementation
* **Prerequisites**: Management experience
* **Resources**: "Leading Change" by John Kotter, MIT Sloan Executive Education

## 5. Corporate Governance & Ethics (3 weeks)
* **Key Skills**: Ethical decision-making, stakeholder management, CSR strategy
* **Prerequisites**: Business law basics
* **Resources**: "Business Ethics" by Manuel Velasquez, Wharton School governance courses`,
    },
    "computer-science": {
      basic: `# Computer Science Fundamentals Roadmap (Basic Level)

## 1. Introduction to Programming (4 weeks)
* **Key Skills**: Basic syntax, variables, control structures, functions
* **Prerequisites**: None
* **Resources**: "Python Crash Course" by Eric Matthes, freeCodeCamp Python tutorials

## 2. Data Structures Basics (3 weeks)
* **Key Skills**: Arrays, lists, dictionaries, sets
* **Prerequisites**: Basic programming
* **Resources**: "Grokking Algorithms" by Aditya Bhargava, Codecademy Data Structures

## 3. Web Development Fundamentals (4 weeks)
* **Key Skills**: HTML, CSS, basic JavaScript
* **Prerequisites**: Basic programming
* **Resources**: "HTML & CSS" by Jon Duckett, MDN Web Docs tutorials

## 4. Database Basics (3 weeks)
* **Key Skills**: SQL queries, database design, CRUD operations
* **Prerequisites**: Basic programming
* **Resources**: "SQL for Beginners" by John Russel, Khan Academy SQL course

## 5. Computer Systems Overview (2 weeks)
* **Key Skills**: Understanding hardware components, operating systems basics
* **Prerequisites**: None
* **Resources**: "Computer Science Illuminated" by Nell Dale, Crash Course Computer Science videos`,
      intermediate: `# Computer Science Intermediate Roadmap

## 1. Object-Oriented Programming (4 weeks)
* **Key Skills**: Classes, inheritance, polymorphism, encapsulation
* **Prerequisites**: Programming fundamentals
* **Resources**: "Head First Object-Oriented Analysis and Design", Coursera OOP specialization

## 2. Advanced Data Structures & Algorithms (6 weeks)
* **Key Skills**: Trees, graphs, dynamic programming, algorithm analysis
* **Prerequisites**: Basic data structures
* **Resources**: "Introduction to Algorithms" by CLRS, AlgoExpert platform

## 3. Full-Stack Web Development (8 weeks)
* **Key Skills**: Frontend frameworks, backend development, RESTful APIs
* **Prerequisites**: Web fundamentals, programming
* **Resources**: "The Road to React" by Robin Wieruch, Full Stack Open course

## 4. Database Management Systems (4 weeks)
* **Key Skills**: Normalization, indexing, transactions, NoSQL databases
* **Prerequisites**: Database basics
* **Resources**: "Database System Concepts" by Silberschatz, MongoDB University

## 5. Computer Networking (3 weeks)
* **Key Skills**: TCP/IP, HTTP, network protocols, API design
* **Prerequisites**: Computer systems overview
* **Resources**: "Computer Networking: A Top-Down Approach", Stanford CS144 course`,
      advanced: `# Advanced Computer Science Roadmap

## 1. Advanced Software Architecture (5 weeks)
* **Key Skills**: Design patterns, microservices, distributed systems
* **Prerequisites**: OOP, full-stack development
* **Resources**: "Clean Architecture" by Robert Martin, MIT 6.824 Distributed Systems

## 2. Machine Learning & AI (8 weeks)
* **Key Skills**: Supervised/unsupervised learning, neural networks, model evaluation
* **Prerequisites**: Linear algebra, statistics, Python
* **Resources**: "Hands-On Machine Learning" by Aurélien Géron, fast.ai courses

## 3. Cloud Computing & DevOps (6 weeks)
* **Key Skills**: Containerization, CI/CD, infrastructure as code, cloud services
* **Prerequisites**: Networking, systems administration
* **Resources**: "The DevOps Handbook", AWS Certified Solutions Architect materials

## 4. Cybersecurity (5 weeks)
* **Key Skills**: Threat modeling, encryption, secure coding, penetration testing
* **Prerequisites**: Networking, systems knowledge
* **Resources**: "The Web Application Hacker's Handbook", OWASP resources

## 5. Specialized Topics (Choose one - 6 weeks)
* **Options**: Blockchain, Quantum Computing, Computer Graphics, Compiler Design
* **Prerequisites**: Varies by topic
* **Resources**: Topic-specific textbooks and online courses from top universities`,
    },
  }

  useEffect(() => {
    setLoading(true)

    // Simulate API call with timeout
    setTimeout(() => {
      // Get the roadmap for the selected subject and level, or use a default
      const roadmapContent =
        sampleRoadmaps[subject]?.[level] ||
        "# Custom Learning Roadmap\n\nThis is a placeholder for a personalized learning roadmap that would be generated by our AI for your selected subject and level."

      setRoadmap(roadmapContent)
      setLoading(false)
    }, 1500)
  }, [subject, level])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-12 w-12 animate-spin text-zinc-500 mb-4" />
        <p className="text-zinc-600 dark:text-zinc-400">Generating your personalized roadmap...</p>
      </div>
    )
  }

  return (
    <div className="prose dark:prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: roadmap.replace(/\n/g, "<br>") }} />
    </div>
  )
}
