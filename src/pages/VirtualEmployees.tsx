import React from "react";
import Header from "@/components/Header";
import VirtualEmployeesHero from "@/components/virtual-employees/VirtualEmployeesHero";
import EmployeeRoles from "@/components/virtual-employees/EmployeeRoles";
import ComparisonChart from "@/components/virtual-employees/ComparisonChart";
import IntegrationProcess from "@/components/virtual-employees/IntegrationProcess";
import ROICalculator from "@/components/virtual-employees/ROICalculator";
import VirtualEmployeeCTA from "@/components/virtual-employees/VirtualEmployeeCTA";
import Footer from "@/components/Footer";

const VirtualEmployees = () => {
  return (
    <div className="min-h-screen bg-ai-dark text-white">
      <Header />
      <VirtualEmployeesHero />
      <EmployeeRoles />
      <ComparisonChart />
      <IntegrationProcess />
      <ROICalculator />
      <VirtualEmployeeCTA />
      <Footer />
    </div>
  );
};

export default VirtualEmployees;
