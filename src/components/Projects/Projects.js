import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import FMCG from "../../Assets/Projects/FMCG.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
{/* Supply Chain */}
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={FMCG}
    isBlog={false}
    title="Supply Chain Analytics - FMCG"
    description="Developed an end-to-end supply chain analytics platform using SQL, Python, and Power BI. Analyzed critical logistics KPIs including OTIF and LIFR to identify operational bottlenecks. Delivered actionable insights that improved delivery performance and inventory optimization, enabling data-driven decision-making across FMCG operations."
    ghLink="https://github.com/KunalOberoi/Supply-Chain-Analysis-in-FMCG-AtliQ-Mart"
    demoLink="https://app.powerbi.com/groups/me/reports/c84f1798-e3ff-4b8d-b057-af5b585c7ff9/ReportSection7703fc56c5598583a34d?experience=power-bi"

  />
</Col>

{/* Hospitality */}
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={bitsOfCode}
    isBlog={false}
    title="Revenue Analytics - Hospitality Domain"
    description="Built an interactive Power BI dashboard analyzing hotel revenue performance, occupancy rates, and booking patterns across properties. Performed data modeling to identify revenue leakage and optimize pricing strategies. Enabled stakeholders to make informed decisions that maximize occupancy and profitability in hospitality operations."
    ghLink="https://github.com/KunalOberoi/Revenue-Insights-In-Hospitality-Domain"
    demoLink="https://app.powerbi.com/groups/me/reports/66f61fee-4d02-4730-ae59-59894a54bf37/ReportSection?experience=power-bi"

  />
</Col>

{/* Customer Churn */}
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={leaf}
    isBlog={false}
    title="Customer Churn Prediction & Analysis"
    description="Built predictive machine learning models using Python and Scikit-learn to identify high-risk churn customers. Applied feature engineering and classification techniques to uncover key churn drivers. Delivered insights enabling businesses to improve retention strategies and reduce customer attrition effectively."
    ghLink="https://github.com/KunalOberoi/Customer-Churn-Analysis"
    demoLink="https://app.powerbi.com/groups/me/reports/14845c48-5bd3-4d08-9ab5-9c1e7cab15fd/ReportSection?experience=power-bi"

  />
</Col>

{/* Financial */}
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={suicide}
    isBlog={false}
    title="Financial Analytics - Banking"
    description="Performed comprehensive financial data analysis evaluating customer segmentation, transaction behavior, and risk indicators. Built dashboards tracking key KPIs and uncovering trends. Supported strategic decisions in lending, risk management, and customer lifecycle optimization for banking operations."
    ghLink="https://github.com/KunalOberoi/Finincial-Insights-Bank-Analysis"
    demoLink="https://app.powerbi.com/groups/me/reports/84a7d784-33b2-4a2d-98c2-6283ddcee449/ReportSection16f3f7361c56e96ae5a3?experience=power-bi"

  />
</Col>

{/* Marketing */}
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={chatify}
    isBlog={false}
    title="Marketing Campaign Performance Analysis"
    description="Analyzed multi-channel marketing campaigns evaluating ROI, conversion rates, and customer engagement metrics. Applied visualization techniques to identify high-performing channels and optimize targeting strategies. Delivered insights improving overall campaign effectiveness and marketing ROI."
    ghLink="https://github.com/KunalOberoi/Marketing-Analysis"
    demoLink="https://app.powerbi.com/groups/me/reports/81406fe0-1616-4de0-88e2-e2165d5d9506/ReportSection?experience=power-bi"

  />
</Col>

{/* Sales Trends */}
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={emotion}
    isBlog={false}
    title="Customer Sales Trends Analysis"
    description="Analyzed large-scale sales datasets using Python and Jupyter Notebook to uncover purchasing patterns and seasonal trends. Generated data visualizations identifying revenue drivers. Supported business forecasting and strategic planning with actionable insights and trend analysis."
    ghLink="https://github.com/KunalOberoi/Customer-Sales-Trends-Analysis"
    demoLink="https://app.powerbi.com/groups/me/reports/f48d657a-6c6f-4513-a146-4aacb0298f19/34af425ccd009a991436?experience=power-bi"

  />
</Col>

{/* Mutual Fund */}
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={bitsOfCode}
    isBlog={false}
    title="Mutual Fund Performance Analysis"
    description="Performed quantitative analysis on mutual fund datasets evaluating risk-adjusted returns, volatility, and portfolio performance. Utilized Python and visualization libraries to generate insights. Supported better investment decision-making through comprehensive performance analysis."
    ghLink="https://github.com/KunalOberoi/Mutual-Fund-Analysis"
    demoLink="https://app.powerbi.com/groups/me/reports/45dc39c1-bb21-49d0-9e37-1a3f325bbfaf/f91d1b6bca439b7306a1?experience=power-bi"

  />
</Col>

{/* Sales Analysis */}
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={editor}
    isBlog={false}
    title="Sales Data Analysis Dashboard"
    description="Developed a data analysis solution using Python tracking sales performance, product demand, and revenue trends. Generated visualizations identifying patterns and opportunities. Improved sales strategy and operational efficiency through comprehensive data-driven insights and analytics."
    ghLink="https://github.com/KunalOberoi/SalesAnalysis"
    demoLink="https://app.powerbi.com/groups/me/reports/bd771478-9073-49de-b3c3-fd107d06e0ab/1e5b9cc3a0ece80ddd60?experience=power-bi"

  />
</Col>

{/* E-commerce */}
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={editor}
    isBlog={false}
    title="Full Stack E-commerce Platform"
    description="Engineered a scalable e-commerce application using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented authentication, product catalog, cart functionality, and order management. Focused on performance optimization, security best practices, and enhanced user experience."
    ghLink="https://github.com/KunalOberoi/Full_Stack_Ecommerce"
    demoLink="https://forever-rho-eight.vercel.app/"
  />
</Col>

{/* MyPhysioFriend */}
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={leaf}
    isBlog={false}
    title="MyPhysioFriend Healthcare Web App"
    description="Developed a healthcare-focused web application assisting users with physiotherapy exercises and recovery guidance. Designed an intuitive interface and structured content system. Enhanced user engagement and accessibility through thoughtful design and user-centric development practices."
    ghLink="https://github.com/KunalOberoi/MyPhysioFriend"
    demoLink="https://my-physio-friend.vercel.app/"
  />
</Col>

{/* Portfolio */}
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={emotion}
    isBlog={false}
    title="Personal Portfolio Website"
    description="Designed a modern, responsive portfolio using React.js and Bootstrap showcasing technical projects and skills. Integrated GitHub repositories for portfolio management. Optimized UI/UX for recruiter engagement, seamless navigation, and professional presentation."
    ghLink="https://github.com/KunalOberoi/KunalOberoiPortfolio"
    demoLink="https://kunaloberoiportfolio.vercel.app/"
  />
</Col>

{/* Hilos */}
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={chatify}
    isBlog={false}
    title="Hilos Frontend Web Project"
    description="Built a responsive frontend web application using HTML, CSS, and JavaScript. Focused on clean design principles, accessibility standards, and cross-device compatibility. Delivered a professional user experience with semantic code and performance optimization."
    ghLink="https://github.com/KunalOberoi/Hilos"
    demoLink="https://hilos-theta.vercel.app/"
  />
</Col>
       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
