"use client"

import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface DemoMaterialsProps {
  subject: string
  level: string
}

interface Material {
  topic: string
  content: string
}

export default function DemoMaterials({ subject, level }: DemoMaterialsProps) {
  const [materials, setMaterials] = useState<Material[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  // Sample materials for business subject
  const businessMaterials = [
    {
      topic: "Strategic Planning",
      content: `## Strategic Planning

Strategic planning is the process of defining an organization's direction and making decisions on allocating its resources to pursue this strategy.

### Key Concepts:
- **Vision and Mission**: Defining the organization's purpose and long-term aspirations
- **SWOT Analysis**: Evaluating Strengths, Weaknesses, Opportunities, and Threats
- **Goal Setting**: Establishing SMART (Specific, Measurable, Achievable, Relevant, Time-bound) objectives
- **Strategy Formulation**: Developing plans to achieve goals and allocate resources

### Practical Example:
A retail company might use strategic planning to identify an opportunity in e-commerce, set goals for online sales growth, and allocate resources to website development and digital marketing.

### Common Challenges:
- Balancing short-term results with long-term vision
- Adapting to rapidly changing market conditions
- Ensuring alignment across different departments

### Recommended Resources:
- "Good Strategy/Bad Strategy" by Richard Rumelt
- Harvard Business Review's "Strategic Planning" collection
- Strategic Planning Society resources`,
    },
    {
      topic: "Financial Analysis",
      content: `## Financial Analysis

Financial analysis is the process of evaluating businesses, projects, budgets, and other finance-related entities to determine their performance and suitability.

### Key Concepts:
- **Financial Statements**: Understanding balance sheets, income statements, and cash flow statements
- **Ratio Analysis**: Using financial ratios to assess performance (liquidity, profitability, leverage)
- **Valuation Methods**: Techniques for determining the value of a business or investment
- **Capital Budgeting**: Evaluating potential investments and their expected returns

### Practical Example:
An investor analyzing a company's financial statements to determine if its stock is undervalued, looking at metrics like P/E ratio, debt-to-equity ratio, and return on equity.

### Common Challenges:
- Accounting irregularities that distort financial reality
- Comparing companies with different accounting practices
- Balancing quantitative analysis with qualitative factors

### Recommended Resources:
- "Financial Intelligence" by Karen Berman and Joe Knight
- Wall Street Prep financial modeling courses
- Bloomberg Market Concepts`,
    },
    {
      topic: "Marketing Strategy",
      content: `## Marketing Strategy

Marketing strategy is a long-term, forward-looking approach to planning with the fundamental goal of achieving a sustainable competitive advantage.

### Key Concepts:
- **Market Segmentation**: Dividing markets into distinct groups with similar needs
- **Targeting**: Selecting which segments to focus on
- **Positioning**: Creating a distinct image in customers' minds
- **Marketing Mix**: The 4Ps (Product, Price, Place, Promotion) or 7Ps for services

### Practical Example:
Apple's marketing strategy focuses on premium positioning, emphasizing design and user experience to justify higher prices, targeting consumers who value innovation and status.

### Common Challenges:
- Differentiating in crowded markets
- Measuring marketing ROI accurately
- Adapting to changing consumer behaviors and digital channels

### Recommended Resources:
- "Marketing Strategy: A Decision-Focused Approach" by Walker and Mullins
- HubSpot Academy marketing courses
- Marketing Science Institute research`,
    },
    {
      topic: "Organizational Behavior",
      content: `## Organizational Behavior

Organizational behavior is the study of how people interact within groups and its principles are applied to make businesses operate more effectively.

### Key Concepts:
- **Leadership Styles**: Different approaches to directing and motivating teams
- **Organizational Culture**: The values, expectations, and practices that guide actions
- **Change Management**: Structured approaches to transitioning individuals and organizations
- **Team Dynamics**: How teams form, develop, and perform

### Practical Example:
Google's organizational culture emphasizes innovation and collaboration, with practices like "20% time" (allowing employees to spend 20% of their time on side projects) supporting these values.

### Common Challenges:
- Resistance to organizational change
- Managing diverse teams with different work styles
- Maintaining culture during rapid growth or remote work

### Recommended Resources:
- "Organizational Behavior" by Stephen Robbins
- MIT Sloan Management Review articles
- Society for Human Resource Management resources`,
    },
    {
      topic: "Operations Management",
      content: `## Operations Management

Operations management is the administration of business practices to create the highest level of efficiency possible within an organization.

### Key Concepts:
- **Supply Chain Management**: Coordinating the flow of goods, services, and information
- **Quality Control**: Ensuring products and services meet defined standards
- **Process Optimization**: Improving efficiency and reducing waste
- **Capacity Planning**: Determining production capacity needed to meet demand

### Practical Example:
Toyota's Production System (TPS) focuses on eliminating waste and continuous improvement, allowing for efficient manufacturing with minimal inventory.

### Common Challenges:
- Balancing efficiency with flexibility
- Managing global supply chains and disruptions
- Implementing new technologies while maintaining operations

### Recommended Resources:
- "Operations Management" by Nigel Slack
- MIT OpenCourseWare Operations Management
- American Production and Inventory Control Society (APICS) certification materials`,
    },
  ]

  // Sample materials for computer science subject
  const computerScienceMaterials = [
    {
      topic: "Data Structures & Algorithms",
      content: `## Data Structures & Algorithms

Data structures are specialized formats for organizing and storing data, while algorithms are step-by-step procedures for solving problems.

### Key Concepts:
- **Time & Space Complexity**: Big O notation for analyzing algorithm efficiency
- **Array Data Structures**: Arrays, dynamic arrays, and their operations
- **Linked Data Structures**: Linked lists, trees, graphs
- **Algorithm Design Paradigms**: Divide and conquer, dynamic programming, greedy algorithms

### Practical Example:
Google's PageRank algorithm uses graph theory to analyze the connectivity of web pages and determine their importance for search results.

### Common Challenges:
- Choosing the right data structure for specific problems
- Optimizing algorithms for performance
- Balancing time complexity against space complexity

### Recommended Resources:
- "Introduction to Algorithms" by Cormen, Leiserson, Rivest, and Stein
- AlgoExpert platform
- LeetCode for practice problems`,
    },
    {
      topic: "Web Development",
      content: `## Web Development

Web development involves building and maintaining websites and web applications, encompassing frontend (client-side) and backend (server-side) development.

### Key Concepts:
- **Frontend Technologies**: HTML, CSS, JavaScript, and frameworks like React or Vue
- **Backend Development**: Server-side languages (Node.js, Python, etc.) and frameworks
- **RESTful APIs**: Designing and consuming application programming interfaces
- **Web Security**: Protecting against common vulnerabilities (XSS, CSRF, SQL injection)

### Practical Example:
A social media platform uses React for the user interface, Node.js for the backend API, and MongoDB to store user data and posts.

### Common Challenges:
- Cross-browser compatibility
- Responsive design for different devices
- Performance optimization for fast loading
- Maintaining security against evolving threats

### Recommended Resources:
- "You Don't Know JS" series by Kyle Simpson
- MDN Web Docs
- freeCodeCamp's web development curriculum`,
    },
    {
      topic: "Database Systems",
      content: `## Database Systems

Database systems are organized collections of data and the software to manage and access that data efficiently.

### Key Concepts:
- **Relational Databases**: Tables, relationships, SQL, normalization
- **NoSQL Databases**: Document, key-value, column-family, and graph databases
- **Database Design**: Schema design, indexing, query optimization
- **ACID Properties**: Atomicity, Consistency, Isolation, Durability

### Practical Example:
An e-commerce platform might use PostgreSQL to store structured data like products and orders, while using Redis for caching and session management.

### Common Challenges:
- Scaling databases for high traffic
- Ensuring data integrity and consistency
- Optimizing query performance
- Managing database migrations

### Recommended Resources:
- "Database System Concepts" by Silberschatz, Korth, and Sudarshan
- Stanford's Database course
- MongoDB University`,
    },
    {
      topic: "Software Architecture",
      content: `## Software Architecture

Software architecture refers to the high-level structure of a software system, the discipline of creating such structures, and the documentation of these structures.

### Key Concepts:
- **Architectural Patterns**: MVC, microservices, event-driven architecture
- **Design Principles**: SOLID, DRY, separation of concerns
- **System Quality Attributes**: Scalability, reliability, maintainability
- **Architecture Documentation**: Views, diagrams, and documentation approaches

### Practical Example:
Netflix's architecture evolved from a monolithic application to a microservices architecture, allowing teams to develop, deploy, and scale services independently.

### Common Challenges:
- Balancing technical debt with feature development
- Evolving architecture as requirements change
- Maintaining consistency across distributed systems
- Communicating architectural decisions effectively

### Recommended Resources:
- "Clean Architecture" by Robert C. Martin
- "Building Microservices" by Sam Newman
- Martin Fowler's website on software architecture`,
    },
    {
      topic: "Machine Learning",
      content: `## Machine Learning

Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to "learn" from data.

### Key Concepts:
- **Supervised Learning**: Training models with labeled data (classification, regression)
- **Unsupervised Learning**: Finding patterns in unlabeled data (clustering, dimensionality reduction)
- **Model Evaluation**: Metrics and techniques for assessing model performance
- **Feature Engineering**: Selecting and transforming variables for model input

### Practical Example:
Spotify uses collaborative filtering and content-based recommendation systems to suggest music based on user preferences and listening history.

### Common Challenges:
- Gathering sufficient quality training data
- Avoiding overfitting and ensuring generalization
- Explaining model decisions (especially for complex models)
- Deploying models to production environments

### Recommended Resources:
- "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow" by Aurélien Géron
- Andrew Ng's Machine Learning courses
- Kaggle competitions for practical experience`,
    },
  ]

  useEffect(() => {
    setLoading(true)

    // Simulate API call with timeout
    setTimeout(() => {
      // Select materials based on subject
      if (subject === "business") {
        setMaterials(businessMaterials)
      } else if (subject === "computer-science") {
        setMaterials(computerScienceMaterials)
      } else {
        // Default placeholder materials
        setMaterials([
          {
            topic: "Introduction to " + subject.replace("-", " "),
            content: `## Introduction to ${subject.replace("-", " ").charAt(0).toUpperCase() + subject.replace("-", " ").slice(1)}

This is a placeholder for learning materials that would be generated by our AI for your selected subject and level.

### Key Concepts:
- Fundamental principles of ${subject.replace("-", " ")}
- Historical development and context
- Core methodologies and approaches
- Current trends and applications

### Practical Examples:
Examples would be provided here to illustrate key concepts in real-world contexts.

### Common Challenges:
Discussion of typical obstacles learners face and strategies to overcome them.

### Recommended Resources:
Curated list of books, courses, and online resources for further learning.`,
          },
          {
            topic: "Advanced Concepts",
            content: `## Advanced Concepts in ${subject.replace("-", " ").charAt(0).toUpperCase() + subject.replace("-", " ").slice(1)}

This is a placeholder for more advanced learning materials that would be generated by our AI.

### Key Concepts:
- Specialized techniques and methodologies
- Cutting-edge research and developments
- Interdisciplinary connections
- Professional applications

### Practical Examples:
Detailed case studies would be provided here.

### Common Challenges:
Analysis of complex problems in the field and approaches to solving them.

### Recommended Resources:
Advanced textbooks, research papers, and specialized courses.`,
          },
        ])
      }

      setLoading(false)
    }, 1500)
  }, [subject, level])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-12 w-12 animate-spin text-zinc-500 mb-4" />
        <p className="text-zinc-600 dark:text-zinc-400">Generating your learning materials...</p>
      </div>
    )
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      {materials.map((material, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{material.topic}</AccordionTrigger>
          <AccordionContent>
            <div className="prose dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: material.content.replace(/\n/g, "<br>") }} />
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
