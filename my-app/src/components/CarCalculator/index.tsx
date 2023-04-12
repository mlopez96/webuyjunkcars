import { Row, Col, Select } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import Block from "../Block";

import { ContactContainer, FormGroup } from "./styles";
import { useState } from "react";

const CarCalculator = ({ title, content, id, t }: ContactProps) => {
  const [carMake, setCarMake] = useState<string>("");
  const [carState, setCarState] = useState<string>("");
  const [carYear, setCarYear] = useState<number>(0);


  const years = {
    1994:	317.50, 
    1997: 365.08,
    1998: 339.19,
    1999: 361.49,
    2000: 372.75,
    2001: 375.51,
    2002:	400.51,
    2003: 421.58,
    2004: 421.45,
    2005: 446.62,
    2006: 457.65,
    2007: 520.48,
    2008: 611.41,
    2009: 636.10,
    2010: 660.74,
    2011: 886.75,
    2012: 791.95,
    2013: 1141.42,
    2014: 1284.56,
    2015: 1281.71
  };
  const states = {
    Alabama: 537.39,
    Arizona: 671.52,
    Arkansas: 707,
    California: 669.80,
    Connecticut: 480.74,
    Colorado: 624.84,
    Delaware: 640.42 ,
    "District of Columbia": 615,
    Florida: 610.56,
    Georgia: 567.18,
    Hawaii: 380,
    Idaho: 191.25,
    Illinois: 544.68,
    Indiana: 588.68,
    Iowa: 508.33,
    Kansas: 410.15,
    Kentucky: 394.64,
    Louisiana: 517.63,
    Maine: 381.67,
    Maryland: 844.04,
    Massachusetts: 527.69,
    Michigan: 538.08,
    Minnesota: 430.42,
    Mississippi: 417.50,
    Missouri: 403.15,
    Nebraska: 605.23,
    Nevada: 419.22,
    "New Hampshire": 478.67,
    "New Jersey": 708.90,
    "New Mexico": 386.48,
    "New York": 661.47,
    "North Carolina": 445.16,
    "North Dakota": 502.50,
    Ohio: 508.98,
    Oklahoma: 418.66,
    Oregon: 502.00,
    Pennsylvania:671.13,
    "Rhode Island": 577.22,
    "South Carolina": 442.14,
    "South Dakota": 206.67,
    Tennessee: 502.93,
    Texas: 618.91,
    Utah: 541.39,
    Virginia: 438.90,
    Washington: 409.17,
    "West Virginia": 105.00,
    Wisconsin: 394.67
  };
  const makes = {
    Chevrolet: 497.11,
    Ford:	543.45,
    Nissan:	525.11,
    Honda:	500.42,
    Toyota:	745.28,
    Dodge:	531.83,
    Chrysler:	426.58, 
    Hyundai:	750.37,
    Jeep:	522.80,
    Buick:	377.72,
    BMW:	819.27,
    KIA:	727.50,
    Mazda:	496.13,
    Pontiac:	332.69,
    GMC:	589.15,
    Volkswagen:	574.60,
    Cadillac:	432.54,
    Mercedes:	699.21,
    Acura: 523.98,
    Infiniti:	668.60 
  };

  const agilePrice = (make:string, state:string, year:number) => {
  if (make === "" || state === "" || year === 0) return "...";
   const price = (states as any)[state] * 0.1 + (makes as any)[make] * 0.4 + (years as any)[year] * 0.4;
   return `$${price.toFixed(2)}`; 
  }

  const handleOptions= (type:object) => {
    return Object.keys(type).map((element) => {
      return { value: element, label: element }
    });
  }


  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup autoComplete="off">
              <div style={{
                display: 'flex', flexDirection: 'column', width: '100%', height: '175px', alignItems: 'center'
              }}>
                 <Select
                  placeholder="All Makes"
                  style={{ width: 200, fontSize: '1rem', marginBottom: '1.5rem' }}
                  allowClear
                  onClear={() => setCarMake("")}
                  onSelect={value => setCarMake(value)}
                  options={handleOptions(makes)}
                />
                <Select
                  placeholder="All Years"
                  style={{ width: 200, fontSize: '1rem', marginBottom: '1.5rem' }}
                  allowClear
                  onClear={() => setCarYear(0)}
                  onSelect={value => setCarYear(value)}
                  options={handleOptions(years)}
                />
                <Select
                  placeholder="All States"
                  style={{ width: 200, fontSize: '1rem', marginBottom: '1.5rem' }}
                  allowClear
                  onClear={() => setCarState("")}
                  onSelect={value => setCarState(value)}
                  options={handleOptions(states)}
                />
              </div>
              <p style={{ textAlign: 'center' }}>Your estimate is {agilePrice(carMake, carState, carYear)}</p>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(CarCalculator);
