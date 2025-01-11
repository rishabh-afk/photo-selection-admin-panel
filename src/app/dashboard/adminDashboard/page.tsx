"use client";

import HomeN from "@/components/dashboard/Home";
import AuthGuard from '@/components/AuthGuard';
import PyramidBarChart from '@/components/common/graph';
import Wrapper from '@/components/common/Wrapper';

import Image from 'next/image';

const Home: React.FC = () => {
  const data = [50, 19, 3, 5]; // Data for the chart
  const xAxisLabels = ['A', 'B', 'C', 'D']; // X-axis labels
  const xAxisHeading = 'Categories'; // X-axis heading
  const yAxisLabels = [50, 5, 10, 15, 20]; // Y-axis labels (values)
  const yAxisHeading = 'Values'; // Y-axis heading
  return (
    <AuthGuard>
    <Wrapper>
      
    <div>
      
    <HomeN />
     <div className="flex justify-between items-center mt-6 ">
            <h2
              style={{ fontFamily: "Roboto" }}
              className="font-extrabold text-black text-lg"
            >
             This Month Sales Details
            </h2>
           
              <button
                style={{
                  width: "7rem",
                  height: "3rem",
                  borderRadius: "5px",
                  border: "2px solid #00897B", // border color inside
                  backgroundColor: "#00897B",
                  color: "#FFFFFF",
                  paddingTop: "10px",
                  paddingRight: "15px",
                  paddingBottom: "10px",
                  paddingLeft: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "14px",
                }}
              >
                {/* Image */}
                <Image
                  src="/assets/icons/sort.svg"
                  alt="Sort Icon"
                  width={15}
                  height={15}
                />

                
                {/* Text */}
                <span style={{ color: "#FFFFFF", marginLeft: "10px" }}>
                  Sort By
                </span>
              </button>
           
          </div>
       <PyramidBarChart
        xAxisLabels={xAxisLabels}
        xAxisHeading={xAxisHeading}
        yAxisLabels={yAxisLabels}
        yAxisHeading={yAxisHeading}
        data={data}
      />
    </div>
      </Wrapper>
      </AuthGuard>
  );
};

export default Home;
