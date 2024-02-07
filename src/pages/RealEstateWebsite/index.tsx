import React from "react";
import {Link} from 'react-router-dom';

import { Button,Img,Input,Line,List,PagerIndicator,SelectBox,Text,} from "components";

const propertyTypeOptionsList = [
  { label: "Area-1", value: "2Bhk" },
  { label: "Area-2", value: "3Bhk" },
  { label: "Area-3", value: "4Bhk" },
];
const locationOptionsList = [
  { label: "Manali", value: "Manali" },
  { label: "Assam", value: "Assam" },
  { label: "Chandigarh", value: "Chandigarh" },
];
const priceOptionsList = [
  { label: "$150", value: "$150" },
  { label: "$170", value: "$170" },
  { label: "$200", value: "$200" },
];

const RealEstateWebsitePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-nunito items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat bg-red-100 flex flex-col h-[718px] items-center justify-start p-[30px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_frame7150.png')" }}
          >
            <div className="flex flex-col md:gap-10 gap-[143px] items-center justify-start max-w-[1281px] mb-[153px] mx-auto md:px-5 w-full">
              <header className="bg-gray-200 flex flex-col items-center justify-center rounded-[5px] w-full">
                <div className="flex flex-col gap-[13px] items-center justify-center mt-[13px] mx-auto w-[96%]">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[30px]"
                      src="images/img_home.svg"
                      alt="home"
                    />
                    <Text
                      className="ml-2.5 md:ml-[0] text-blue_gray-900 text-center text-xl"
                      size="txtTimesNewRomanPSMT20"
                    >
                      Easy Housing
                    </Text>
                    <ul className="flex md:flex-1 flex-row font-nunito sm:hidden items-start justify-center md:ml-[0] ml-[470px] w-[30%] md:w-full common-row-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-[15px] text-blue_gray-900 text-center"
                        >
                          <Text size="txtNunitoRegular15">Home</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="ml-[29px] text-[15px] text-blue_gray-900 text-center"
                        >
                          <Text size="txtNunitoRegular15">About</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="ml-7 text-[15px] text-blue_gray-900 text-center"
                        >
                          <Text size="txtNunitoRegular15">Property</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="ml-7 text-[15px] text-blue_gray-900 text-center"
                        >
                          <Text size="txtNunitoRegular15">Blog</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="ml-[29px] text-[15px] text-blue_gray-900 text-center"
                        >
                          <Text size="txtNunitoRegular15">Contact Us</Text>
                        </a>
                      </li>
                    </ul>
                    <Button
                      className="cursor-pointer font-medium font-nunito leading-[normal] min-w-[100px] md:ml-[0] ml-[30px] rounded-[5px] text-[15px] text-center"
                      color="deep_orange_A200"
                    >
                       <Link to="/login">Login</Link>
                    </Button>
                    <Button
                      className="cursor-pointer font-medium font-nunito leading-[normal] min-w-[100px] ml-2.5 md:ml-[0] rounded-[5px] text-[15px] text-center"
                      color="deep_orange_A200"
                    >
                      <Link to="/register">Register</Link>
                    </Button>
                  </div>
                  <Line className="bg-deep_orange-A200 h-1 md:ml-[0] ml-[619px] mr-[561px] w-[4%]" />
                </div>
              </header>
              <div className="flex flex-col gap-[17px] items-center justify-start w-[64%] md:w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start">
                  <Text
                    className="sm:text-[41px] md:text-[47px] text-[55px] text-center text-white-A700"
                    size="txtNunitoBold55"
                  >
                    Find Your Dream Home
                  </Text>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700"
                    size="txtNunitoMedium25"
                  >
                    From as low as $10 per day with limited time offer
                    discounts.
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-center w-2/5 md:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[100px] rounded-[5px] text-[15px] text-center"
                    color="deep_orange_A200"
                  >
                    Buy
                  </Button>
                  <Button className="cursor-pointer font-medium leading-[normal] min-w-[100px] rounded-[5px] text-[15px] text-center">
                    Rent
                  </Button>
                  <Button className="cursor-pointer font-medium leading-[normal] min-w-[100px] rounded-[5px] text-[15px] text-center">
                    Sell
                  </Button>
                </div>
                <div className="bg-white-A700_3f flex flex-col items-center justify-start p-[9px] rounded-[5px] w-full">
                  <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-3 rounded-[5px] w-full">
                    <Text
                      className="border border-gray-400 border-solid ml-1 sm:ml-[0] pb-2.5 pl-2.5 sm:pr-5 pr-[35px] pt-[13px] rounded-[5px] text-center text-gray-500 text-sm"
                      size="txtNunitoRegular14"
                    >
                      Entar Keyword
                    </Text>
                    <SelectBox
                      className="sm:flex-1 leading-[normal] ml-2.5 sm:ml-[0] text-center text-sm w-[23%] sm:w-full"
                      placeholderClassName="text-gray-500"
                      indicator={
                        <Img
                          className="h-1.5 mr-[0] w-2.5"
                          src="images/img_vector.svg"
                          alt="Vector"
                        />
                      }
                      isMulti={false}
                      name="frame7154"
                      options={propertyTypeOptionsList}
                      isSearchable={false}
                      placeholder="Property Type"
                      shape="round"
                      color="gray_400"
                      size="xs"
                      variant="outline"
                    />
                    <SelectBox
                      className="sm:flex-1 leading-[normal] ml-2.5 sm:ml-[0] text-center text-sm w-[18%] sm:w-full"
                      placeholderClassName="text-gray-500"
                      indicator={
                        <Img className="h-1.5 mr-[0] w-2.5" src="images/img_vector.svg" alt="Vector"
                        />
                      }
                      isMulti={false}
                      name="frame7155"
                      options={locationOptionsList}
                      isSearchable={false}
                      placeholder="Location"
                      shape="round"
                      color="gray_400"
                      size="xs"
                      variant="outline"
                    />
                    <SelectBox
                      className="sm:flex-1 leading-[normal] ml-2.5 sm:ml-[0] text-center text-sm w-[18%] sm:w-full"
                      placeholderClassName="text-gray-500"
                      indicator={
                        <Img className="h-1.5 mr-[0] w-2.5" src="images/img_vector.svg" alt="Vector" />
                      }
                      isMulti={false}
                      name="frame7156"
                      options={priceOptionsList}
                      isSearchable={false}
                      placeholder="Price"
                      shape="round"
                      color="gray_400"
                      size="xs"
                      variant="outline"
                    />
                    <Button className="cursor-pointer font-medium leading-[normal] min-w-[100px] sm:ml-[0] ml-[22px] rounded-[5px] text-[15px] text-center" color="deep_orange_A200">Search </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mt-8 text-center text-deep_orange-A200 text-lg"
            size="txtNunitoSemiBold18"
          >
            Our Properties
          </Text>
          <Text
            className="mt-2.5 sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
            size="txtNunitoSemiBold28"
          >
            Our Featured Properties
          </Text>
          <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-7xl min-h-[auto] mt-[37px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[33px] rounded-[5px] shadow-bs w-full">
              <div className="flex flex-col gap-5 justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[264px] items-center justify-start p-[15px] rounded-tl-[5px] rounded-tr-[5px] w-full"
                  style={{ backgroundImage: "url('images/img_frame7159.png')" }}
                >
                  <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start mb-[98px] w-[95%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] mb-2 min-w-[79px] text-center text-xs"
                        shape="round"
                        color="deep_orange_A200"
                        size="xs"
                      >
                        For Rent
                      </Button>
                      <Button
                        className="flex h-[33px] items-center justify-center w-[33px]"
                        shape="round"
                        color="black_900_59"
                        size="xs"
                      >
                        <Img src="images/img_favorite.svg" alt="favorite" />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Button className="flex h-[37px] items-center justify-center rotate-[-90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200.svg"
                          alt="vector"
                        />
                      </Button>
                      <Button className="flex h-[37px] items-center justify-center rotate-[90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200_37x37.svg"
                          alt="vector_One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[22px] items-start justify-start md:ml-[0] ml-[25px] w-[67%] md:w-full">
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtNunitoSemiBold18Black900"
                  >
                    Tribble Story House For Rent
                  </Text>
                  <div className="flex flex-row gap-[7px] items-center justify-start w-[48%] md:w-full">
                    <Img
                      className="h-[19px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="text-center text-deep_orange-A200 text-xs"
                      size="txtNunitoSemiBold12"
                    >
                      <span className="md:text-[23px] sm:text-[21px] text-deep_orange-A200 font-nunito text-[25px] font-semibold">
                        13,000/
                      </span>
                      <span className="text-deep_orange-A200 font-nunito text-base font-semibold">
                        Mo
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start w-[37%] md:w-full">
                    <Img
                      className="h-[17px]"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                    <Text
                      className="ml-[5px] text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      Maharashtra
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      3 Beds
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_settings_deep_orange_a200.svg"
                      alt="settings_One"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      2 Baths
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px] w-3.5"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      1500 Sq Ft
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[33px] rounded-[5px] shadow-bs w-full">
              <div className="flex flex-col gap-5 justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[264px] items-center justify-start p-[15px] rounded-tl-[5px] rounded-tr-[5px] w-full"
                  style={{
                    backgroundImage: "url('images/img_frame7159_264x407.png')",
                  }}
                >
                  <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start mb-[98px] w-[95%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] mb-2 min-w-[79px] text-center text-xs"
                        shape="round"
                        color="deep_orange_A200"
                        size="xs"
                      >
                        For Sell
                      </Button>
                      <Button
                        className="flex h-[33px] items-center justify-center w-[33px]"
                        shape="round"
                        color="black_900_59"
                        size="xs"
                      >
                        <Img src="images/img_favorite.svg" alt="favorite" />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Button className="flex h-[37px] items-center justify-center rotate-[-90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200.svg"
                          alt="vector"
                        />
                      </Button>
                      <Button className="flex h-[37px] items-center justify-center rotate-[90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200_37x37.svg"
                          alt="vector_One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[23px] w-[68%] md:w-full">
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtNunitoSemiBold18Black900"
                  >
                    Brand New Appartments
                  </Text>
                  <div className="flex flex-row items-center justify-start ml-0.5 md:ml-[0] mt-[19px] w-1/2 md:w-full">
                    <Img
                      className="h-[19px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="ml-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-deep_orange-A200"
                      size="txtNunitoSemiBold25"
                    >
                      13,000,00
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] mt-[18px] w-[36%] md:w-full">
                    <Img
                      className="h-[17px]"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                    <Text
                      className="ml-[5px] text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      Maharashtra
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] mt-[23px] w-full">
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      3 Beds
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_settings_deep_orange_a200.svg"
                      alt="settings_One"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      1 Baths
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px] w-3.5"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      1200 Sq Ft
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[33px] rounded-[5px] shadow-bs w-full">
              <div className="flex flex-col gap-[19px] justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[264px] items-center justify-start p-[15px] rounded-tl-[5px] rounded-tr-[5px] w-full"
                  style={{
                    backgroundImage: "url('images/img_frame7159_1.png')",
                  }}
                >
                  <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start mb-[98px] w-[95%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] mb-2 min-w-[79px] text-center text-xs"
                        shape="round"
                        color="deep_orange_A200"
                        size="xs"
                      >
                        For Rent
                      </Button>
                      <Button
                        className="flex h-[33px] items-center justify-center w-[33px]"
                        shape="round"
                        color="black_900_59"
                        size="xs"
                      >
                        <Img src="images/img_favorite.svg" alt="favorite" />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Button className="flex h-[37px] items-center justify-center rotate-[-90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200.svg"
                          alt="vector"
                        />
                      </Button>
                      <Button className="flex h-[37px] items-center justify-center rotate-[90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200_37x37.svg"
                          alt="vector_One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[23px] items-start justify-start md:ml-[0] ml-[23px] w-[68%] md:w-full">
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtNunitoSemiBold18Black900"
                  >
                    Luxurious Villa
                  </Text>
                  <div className="flex flex-row gap-[5px] items-center justify-start ml-0.5 md:ml-[0] w-[48%] md:w-full">
                    <Img
                      className="h-[19px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="text-center text-deep_orange-A200 text-xs"
                      size="txtNunitoSemiBold12"
                    >
                      <span className="md:text-[23px] sm:text-[21px] text-deep_orange-A200 font-nunito text-[25px] font-semibold">
                        35,000/
                      </span>
                      <span className="text-deep_orange-A200 font-nunito text-base font-semibold">
                        Mo
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] w-[36%] md:w-full">
                    <Img
                      className="h-[17px]"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                    <Text
                      className="ml-[5px] text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      Maharashtra
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] w-full">
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      5 Beds
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_settings_deep_orange_a200.svg"
                      alt="settings_One"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      3 Baths
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px] w-3.5"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      3500 Sq Ft
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[33px] rounded-[5px] shadow-bs w-full">
              <div className="flex flex-col gap-5 justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[264px] items-center justify-start p-[15px] rounded-tl-[5px] rounded-tr-[5px] w-full"
                  style={{
                    backgroundImage: "url('images/img_frame7159_2.png')",
                  }}
                >
                  <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start mb-[98px] w-[95%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] mb-2 min-w-[79px] text-center text-xs"
                        shape="round"
                        color="deep_orange_A200"
                        size="xs"
                      >
                        For Rent
                      </Button>
                      <Button
                        className="flex h-[33px] items-center justify-center w-[33px]"
                        shape="round"
                        color="black_900_59"
                        size="xs"
                      >
                        <Img src="images/img_favorite.svg" alt="favorite" />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Button className="flex h-[37px] items-center justify-center rotate-[-90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200.svg"
                          alt="vector"
                        />
                      </Button>
                      <Button className="flex h-[37px] items-center justify-center rotate-[90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200_37x37.svg"
                          alt="vector_One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[22px] items-start justify-start md:ml-[0] ml-[25px] w-[67%] md:w-full">
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtNunitoSemiBold18Black900"
                  >
                    Diamond Manco Apartment
                  </Text>
                  <div className="flex flex-row gap-[7px] items-center justify-start w-[48%] md:w-full">
                    <Img
                      className="h-[19px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="text-center text-deep_orange-A200 text-xs"
                      size="txtNunitoSemiBold12"
                    >
                      <span className="md:text-[23px] sm:text-[21px] text-deep_orange-A200 font-nunito text-[25px] font-semibold">
                        10,000/
                      </span>
                      <span className="text-deep_orange-A200 font-nunito text-base font-semibold">
                        Mo
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start w-[37%] md:w-full">
                    <Img
                      className="h-[17px]"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                    <Text
                      className="ml-[5px] text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      Maharashtra
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      2 Beds
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_settings_deep_orange_a200.svg"
                      alt="settings_One"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      2 Baths
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px] w-3.5"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      1000 Sq Ft
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[33px] rounded-[5px] shadow-bs w-full">
              <div className="flex flex-col gap-[19px] justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[264px] items-center justify-start p-[15px] rounded-tl-[5px] rounded-tr-[5px] w-full"
                  style={{
                    backgroundImage: "url('images/img_frame7159_3.png')",
                  }}
                >
                  <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start mb-[98px] w-[95%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] mb-2 min-w-[79px] text-center text-xs"
                        shape="round"
                        color="deep_orange_A200"
                        size="xs"
                      >
                        For Sell
                      </Button>
                      <Button
                        className="flex h-[33px] items-center justify-center w-[33px]"
                        shape="round"
                        color="black_900_59"
                        size="xs"
                      >
                        <Img src="images/img_favorite.svg" alt="favorite" />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Button className="flex h-[37px] items-center justify-center rotate-[-90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200.svg"
                          alt="vector"
                        />
                      </Button>
                      <Button className="flex h-[37px] items-center justify-center rotate-[90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200_37x37.svg"
                          alt="vector_One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-6 md:ml-[0] w-[68%] md:w-full">
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtNunitoSemiBold18Black900"
                  >
                    Affordable Green Villa House
                  </Text>
                  <div className="flex flex-row items-center justify-start mt-5 w-1/2 md:w-full">
                    <Img
                      className="h-[19px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="ml-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-deep_orange-A200"
                      size="txtNunitoSemiBold25"
                    >
                      30,000,00
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[18px] w-[36%] md:w-full">
                    <Img
                      className="h-[17px]"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                    <Text
                      className="ml-[5px] text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      Maharashtra
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-[23px] w-full">
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      4 Beds
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_settings_deep_orange_a200.svg"
                      alt="settings_One"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      2 Baths
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px] w-3.5"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      3000 Sq Ft
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[33px] rounded-[5px] shadow-bs w-full">
              <div className="flex flex-col gap-5 justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[264px] items-center justify-start p-[15px] rounded-tl-[5px] rounded-tr-[5px] w-full"
                  style={{
                    backgroundImage: "url('images/img_frame7159_4.png')",
                  }}
                >
                  <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start mb-[98px] w-[95%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] mb-2 min-w-[79px] text-center text-xs"
                        shape="round"
                        color="deep_orange_A200"
                        size="xs"
                      >
                        For Rent
                      </Button>
                      <Button
                        className="flex h-[33px] items-center justify-center w-[33px]"
                        shape="round"
                        color="black_900_59"
                        size="xs"
                      >
                        <Img src="images/img_favorite.svg" alt="favorite" />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Button className="flex h-[37px] items-center justify-center rotate-[-90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200.svg"
                          alt="vector"
                        />
                      </Button>
                      <Button className="flex h-[37px] items-center justify-center rotate-[90deg] rounded-[18px] w-[37px]">
                        <Img
                          src="images/img_vector_deep_orange_a200_37x37.svg"
                          alt="vector_One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[22px] items-start justify-start ml-6 md:ml-[0] w-[68%] md:w-full">
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtNunitoSemiBold18Black900"
                  >
                    Spaceious 2 Story Bunglow{" "}
                  </Text>
                  <div className="flex flex-row gap-[5px] items-center justify-start w-[48%] md:w-full">
                    <Img
                      className="h-[19px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="text-center text-deep_orange-A200 text-xs"
                      size="txtNunitoSemiBold12"
                    >
                      <span className="md:text-[23px] sm:text-[21px] text-deep_orange-A200 font-nunito text-[25px] font-semibold">
                        35,000/
                      </span>
                      <span className="text-deep_orange-A200 font-nunito text-base font-semibold">
                        Mo
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start w-[36%] md:w-full">
                    <Img
                      className="h-[17px]"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                    <Text
                      className="ml-[5px] text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      Maharashtra
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      5 Beds
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px]"
                      src="images/img_settings_deep_orange_a200.svg"
                      alt="settings_One"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      3 Baths
                    </Text>
                    <Img
                      className="h-3.5 mt-[3px] w-3.5"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Text
                      className="text-black-900 text-center text-sm"
                      size="txtNunitoRegular14Black900"
                    >
                      2500 Sq Ft
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PagerIndicator
            className="flex h-2.5 justify-center mt-10 w-[70px]"
            count={4}
            activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-deep_orange-A200 w-2.5"
            activeIndex={1}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100 w-2.5"
            selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
            unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
          />
          <Text
            className="mt-[69px] text-center text-deep_orange-A200 text-lg"
            size="txtNunitoSemiBold18"
          >
            Locations
          </Text>
          <Text
            className="mt-[11px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
            size="txtNunitoSemiBold28"
          >
            Find Property By City
          </Text>
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[1281px] mt-[37px] mx-auto md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[336px] items-center justify-end pt-[285px] rounded-[5px] shadow-bs1 w-[41%] md:w-full"
              style={{ backgroundImage: "url('images/img_frame7164.png')" }}
            >
              <div className="bg-red-500_99 flex flex-col items-center justify-start p-3 w-full">
                <Text
                  className="text-center text-lg text-white-A700"
                  size="txtNunitoBold18"
                >
                  Mumbai
                </Text>
              </div>
            </div>
            <Img
              className="md:flex-1 h-[336px] sm:h-auto object-cover rounded-[5px] w-[58%] md:w-full"
              src="images/img_frame7165.png"
              alt="frame7165"
            />
          </div>
          <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start max-w-[1281px] mt-[30px] mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-[293px] md:h-auto object-cover rounded-[5px] w-[32%] sm:w-full"
              src="images/img_frame7166.png"
              alt="frame7166"
            />
            <Img
              className="sm:flex-1 h-[293px] md:h-auto object-cover rounded-[5px] w-[32%] sm:w-full"
              src="images/img_frame7167.png"
              alt="frame7167"
            />
            <Img
              className="sm:flex-1 h-[293px] md:h-auto object-cover rounded-[5px] w-[32%] sm:w-full"
              src="images/img_frame7168.png"
              alt="frame7168"
            />
          </div>
          <div className="bg-blue_gray-900 flex flex-col items-center justify-start mt-[70px] p-[42px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1282px] mx-auto w-full">
              <Text
                className="text-center text-deep_orange-A200 text-lg"
                size="txtNunitoSemiBold18"
              >
                Our Features
              </Text>
              <Text
                className="mt-[11px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                size="txtNunitoSemiBold28WhiteA700"
              >
                Why Choose Us ?
              </Text>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[37px] w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[5px] w-full">
                  <div className="bg-deep_orange-A200_33 flex flex-col h-28 items-center justify-start p-6 sm:px-5 rounded-[50%] w-28">
                    <Img
                      className="h-16"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  </div>
                  <Text
                    className="mt-5 text-base text-black-900 text-center"
                    size="txtNunitoSemiBold16"
                  >
                    Trusted By Thousands
                  </Text>
                  <Text
                    className="mb-[21px] mt-[9px] text-base text-black-900 text-center w-4/5 sm:w-full"
                    size="txtNunitoLight16"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque{" "}
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-5 rounded-[5px] w-full">
                  <div className="bg-deep_orange-A200_33 flex flex-col h-28 items-center justify-start p-[21px] sm:px-5 rounded-[50%] w-28">
                    <Img
                      className="h-16 my-[3px]"
                      src="images/img_home_red_500.svg"
                      alt="home"
                    />
                  </div>
                  <div className="flex flex-col gap-[9px] items-center justify-start mb-[21px]">
                    <Text
                      className="text-base text-black-900 text-center"
                      size="txtNunitoSemiBold16"
                    >
                      Wide Range Of Properties
                    </Text>
                    <Text
                      className="text-base text-black-900 text-center w-full"
                      size="txtNunitoLight16"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque{" "}
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[5px] w-full">
                  <div className="bg-deep_orange-A200_33 flex flex-col h-28 items-center justify-start p-[27px] sm:px-5 rounded-[50%] w-28">
                    <Img
                      className="h-[46px] my-1.5"
                      src="images/img_settings_red_500.svg"
                      alt="settings"
                    />
                  </div>
                  <Text
                    className="mt-5 text-base text-black-900 text-center"
                    size="txtNunitoSemiBold16"
                  >
                    Finance Made Easy
                  </Text>
                  <Text
                    className="mb-[21px] mt-[9px] text-base text-black-900 text-center w-4/5 sm:w-full"
                    size="txtNunitoLight16"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque{" "}
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[5px] w-full">
                  <div className="bg-deep_orange-A200_33 flex flex-col h-28 items-center justify-start p-[21px] sm:px-5 rounded-[50%] w-28">
                    <Img
                      className="h-[62px] my-[3px]"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                  </div>
                  <Text
                    className="mt-[19px] text-base text-black-900 text-center"
                    size="txtNunitoSemiBold16"
                  >
                    Life Time Assistance
                  </Text>
                  <Text
                    className="mb-[21px] mt-2.5 text-base text-black-900 text-center w-4/5 sm:w-full"
                    size="txtNunitoLight16"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque{" "}
                  </Text>
                </div>
              </List>
            </div>
          </div>
          <Text
            className="mt-[70px] text-center text-deep_orange-A200 text-lg"
            size="txtNunitoSemiBold18"
          >
            Expertise Is Here
          </Text>
          <Text
            className="mt-2.5 sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
            size="txtNunitoSemiBold28"
          >
            Our Exclusive Agents
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1092px] mt-[57px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[38%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[29px] items-start justify-between w-full">
                <Img
                  className="h-[158px] md:h-auto rounded-[50%] w-[158px]"
                  src="images/img_ellipse81.png"
                  alt="ellipseEightyOne"
                />
                <div className="flex flex-col items-start justify-start sm:mt-0 mt-[29px]">
                  <Text
                    className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
                    size="txtNunitoBold22"
                  >
                    Jenny White
                  </Text>
                  <Text
                    className="mt-0.5 text-center text-gray-400 text-lg"
                    size="txtNunitoMedium18"
                  >
                    Sunshine
                  </Text>
                  <Input
                    name="frame7175"
                    placeholder="Call : 9635872558"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-center text-lg w-full"
                    wrapClassName="flex mt-[15px] w-full"
                    prefix={
                      <div className="mr-2.5 sm:w-full sm:mx-0 w-[8%] outline-red-500 outline-[0.5px] outline my-px">
                        <Img
                          className="my-auto"
                          src="images/img_call.svg"
                          alt="call"
                        />
                      </div>
                    }
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[38%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[29px] items-start justify-between w-full">
                <Img
                  className="h-[158px] md:h-auto rounded-[50%] w-[158px]"
                  src="images/img_ellipse81_158x158.png"
                  alt="ellipseEightyOne_One"
                />
                <div className="flex flex-col justify-start sm:mt-0 mt-[27px]">
                  <Text
                    className="ml-1.5 md:ml-[0] text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
                    size="txtNunitoBold22"
                  >
                    John White
                  </Text>
                  <div className="flex flex-col gap-[15px] items-start justify-start mt-1 w-full">
                    <Text
                      className="text-center text-gray-400 text-lg"
                      size="txtNunitoMedium18"
                    >
                      Sunshine
                    </Text>
                    <Input
                      name="frame7175_One"
                      placeholder="Call : 9635872558"
                      className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-center text-lg w-full"
                      wrapClassName="flex w-full"
                      prefix={
                        <div className="mr-2.5 sm:w-full sm:mx-0 w-[8%] outline-red-500 outline-[0.5px] outline my-px">
                          <Img
                            className="my-auto"
                            src="images/img_call.svg"
                            alt="call"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1092px] mt-[60px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[38%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[29px] items-start justify-between w-full">
                <Img
                  className="h-[158px] md:h-auto rounded-[50%] w-[158px]"
                  src="images/img_ellipse81_1.png"
                  alt="ellipseEightyOne_Two"
                />
                <div className="flex flex-col items-start justify-start sm:mt-0 mt-[29px]">
                  <Text
                    className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
                    size="txtNunitoBold22"
                  >
                    Merry Rose
                  </Text>
                  <Text
                    className="mt-0.5 text-center text-gray-400 text-lg"
                    size="txtNunitoMedium18"
                  >
                    Sunshine
                  </Text>
                  <Input
                    name="frame7175_Two"
                    placeholder="Call : 9635872558"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-center text-lg w-full"
                    wrapClassName="flex mt-[15px] w-full"
                    prefix={
                      <div className="mr-2.5 sm:w-full sm:mx-0 w-[8%] outline-red-500 outline-[0.5px] outline my-px">
                        <Img
                          className="my-auto"
                          src="images/img_call.svg"
                          alt="call"
                        />
                      </div>
                    }
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[38%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[29px] items-start justify-between w-full">
                <Img
                  className="h-[158px] md:h-auto rounded-[50%] w-[158px]"
                  src="images/img_ellipse81_2.png"
                  alt="ellipseEightyOne_Three"
                />
                <div className="flex flex-col items-start justify-start sm:mt-0 mt-[29px]">
                  <Text
                    className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
                    size="txtNunitoBold22"
                  >
                    Alex Roy
                  </Text>
                  <Text
                    className="mt-0.5 text-center text-gray-400 text-lg"
                    size="txtNunitoMedium18"
                  >
                    Sunshine
                  </Text>
                  <Input
                    name="frame7175_Three"
                    placeholder="Call : 9635872558"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-center text-lg w-full"
                    wrapClassName="flex mt-[15px] w-full"
                    prefix={
                      <div className="mr-2.5 sm:w-full sm:mx-0 w-[8%] outline-red-500 outline-[0.5px] outline my-px">
                        <Img
                          className="my-auto"
                          src="images/img_call.svg"
                          alt="call"
                        />
                      </div>
                    }
                  ></Input>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[600px] items-start justify-start mt-[70px] p-20 md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_frame7176.png')" }}
          >
            <div className="bg-white-A700 flex flex-col items-center justify-start my-[102px] p-[29px] md:px-5 rounded-[5px] w-[31%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-center text-deep_orange-A200 text-lg"
                  size="txtNunitoSemiBold18"
                >
                  Let’s Take A Tour
                </Text>
                <Text
                  className="mt-2.5 sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtNunitoSemiBold28"
                >
                  <>
                    Search Property Smarter,
                    <br />
                    Quicker & Anywhere
                  </>
                </Text>
                <div className="flex flex-row gap-2.5 items-end justify-start mt-[29px] w-[42%] md:w-full">
                  <Img
                    className="h-[35px]"
                    src="images/img_vector_red_500.svg"
                    alt="vector_Three"
                  />
                  <Text
                    className="my-1 text-black-900 text-lg"
                    size="txtNunitoSemiBold18Black900"
                  >
                    Play video
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="h-[92px] md:h-auto mt-[70px] rounded-[50%] w-[92px]"
            src="images/img_ellipse82.png"
            alt="ellipseEightyTwo"
          />
          <Text
            className="mt-[13px] text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
            size="txtNunitoSemiBold22"
          >
            Maria Crist
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-center max-w-[1062px] mt-10 mx-auto md:px-5 w-full">
            <Button
              className="flex h-[55px] items-center justify-center mb-2 rotate-[-90deg] rounded-[27px] w-[55px]"
              size="lg"
            >
              <Img
                src="images/img_vector_deep_orange_a200.svg"
                alt="vector_Four"
              />
            </Button>
            <div className="h-[63px] ml-9 md:ml-[0] relative w-[83%] md:w-full">
              <Img
                className="absolute h-[63px] inset-[0] justify-center m-auto"
                src="images/img_thumbsup.svg"
                alt="thumbsup"
              />
              <Text
                className="absolute h-max inset-[0] italic justify-center m-auto text-black-900 text-center text-lg"
                size="txtNunitoItalicRegular18"
              >
                <>
                  {" "}
                  “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque tempor erat nec urna congue dapibus.
                  <br /> Etiam sollicitudin eget massa nec fringilla. Phasellus
                  varius quam id felis accumsan volutpat. “
                </>
              </Text>
            </div>
            <Button
              className="flex h-[55px] items-center justify-center mb-2 md:ml-[0] ml-[37px] rotate-[-90deg] rounded-[27px] w-[55px]"
              size="lg"
            >
              <Img src="images/img_overflowmenu.svg" alt="overflowmenu" />
            </Button>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col gap-3 h-[621px] items-center justify-start mt-[63px] p-[31px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_frame7178.png')" }}
          >
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
              size="txtNunitoSemiBold28"
            >
              Find Your Dream Home Today
            </Text>
            <Button
              className="cursor-pointer font-medium font-roboto leading-[normal] mb-[462px] min-w-[138px] rounded-[5px] text-[15px] text-center"
              color="deep_orange_A200"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          <footer className="bg-blue_gray-900 flex items-center justify-center md:px-5 w-full">
            <div className="flex flex-col items-center justify-center ml-20 mr-[42px] my-[61px] w-[92%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[22%] md:w-full">
                  <div className="flex flex-row font-timesnewroman gap-2.5 items-end justify-start w-[54%] md:w-full">
                    <Img
                      className="h-[30px]"
                      src="images/img_thumbsup_white_a700.svg"
                      alt="thumbsup_One"
                    />
                    <Text
                      className="mt-[5px] text-center text-white-A700 text-xl"
                      size="txtTimesNewRomanPSMT20WhiteA700"
                    >
                      Easy Housing
                    </Text>
                  </div>
                  <Text
                    className="leading-[25.00px] mt-[17px] text-[15px] text-white-A700 w-full"
                    size="txtNunitoRegular15WhiteA700"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </Text>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-5 w-[78%] md:w-full">
                    <Button
                      className="flex h-[35px] items-center justify-center w-[35px]"
                      shape="round"
                      color="white_A700_7f"
                      size="xs"
                    >
                      <Img src="images/img_facebook.svg" alt="facebook" />
                    </Button>
                    <Button
                      className="flex h-[35px] items-center justify-center w-[35px]"
                      shape="round"
                      color="white_A700_7f"
                      size="sm"
                    >
                      <Img
                        className="h-[19px]"
                        src="images/img_link.svg"
                        alt="link"
                      />
                    </Button>
                    <Button
                      className="flex h-[35px] items-center justify-center w-[35px]"
                      shape="round"
                      color="white_A700_7f"
                      size="sm"
                    >
                      <Img
                        className="h-5"
                        src="images/img_info.svg"
                        alt="info"
                      />
                    </Button>
                    <Button
                      className="flex h-[35px] items-center justify-center w-[35px]"
                      shape="round"
                      color="white_A700_7f"
                      size="sm"
                    >
                      <Img
                        className="h-[21px]"
                        src="images/img_settings_white_a700.svg"
                        alt="settings"
                      />
                    </Button>
                    <Button
                      className="flex h-[35px] items-center justify-center w-[35px]"
                      shape="round"
                      color="white_A700_7f"
                      size="sm"
                    >
                      <Img src="images/img_trash.svg" alt="trash" />
                    </Button>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-1.5 w-[13%] md:w-full">
                  <div className="flex flex-col gap-7 justify-start w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start ml-2 md:ml-[0] w-[61%] md:w-full">
                      <Text
                        className="text-lg text-white-A700"
                        size="txtNunitoBold18"
                      >
                        Quick Links
                      </Text>
                      <Line className="bg-red-500 h-[3px] w-[42%]" />
                    </div>
                    <ul className="flex flex-col items-start justify-start w-[159px] md:w-full common-column-list">
                      <li>
                        <a href="javascript:">
                          <div className="flex flex-row gap-2.5 items-center justify-start">
                            <div className="bg-white-A700 h-[7px] my-1.5 rounded-[3px] w-[7px]"></div>
                            <Text
                              className="text-[15px] text-white-A700"
                              size="txtNunitoRegular15WhiteA700"
                            >
                              About Us
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <div className="flex flex-row gap-2.5 items-center justify-start mt-[15px]">
                            <div className="bg-white-A700 h-[7px] my-1.5 rounded-[3px] w-[7px]"></div>
                            <Text
                              className="text-[15px] text-white-A700"
                              size="txtNunitoRegular15WhiteA700"
                            >
                              Blogs & Article
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <div className="flex flex-row gap-[9px] items-center justify-start mt-3">
                            <div className="bg-white-A700 h-[7px] my-1.5 rounded-[3px] w-[7px]"></div>
                            <Text
                              className="text-[15px] text-white-A700"
                              size="txtNunitoRegular15WhiteA700"
                            >
                              Terms And Condition
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <div className="flex flex-row gap-2.5 items-center justify-start mt-[15px]">
                            <div className="bg-white-A700 h-[7px] my-1.5 rounded-[3px] w-[7px]"></div>
                            <a
                              href="javascript:"
                              className="text-[15px] text-white-A700"
                            >
                              <Text size="txtNunitoRegular15WhiteA700">
                                Privacy Policy
                              </Text>
                            </a>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <div className="flex flex-row gap-2.5 items-center justify-start mt-3">
                            <div className="bg-white-A700 h-[7px] my-1.5 rounded-[3px] w-[7px]"></div>
                            <a
                              href="javascript:"
                              className="text-[15px] text-white-A700"
                            >
                              <Text size="txtNunitoRegular15WhiteA700">
                                Contact Us
                              </Text>
                            </a>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start w-1/5 md:w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtNunitoBold18"
                  >
                    News Letter
                  </Text>
                  <Line className="bg-red-500 h-[3px] mt-2.5 w-[16%]" />
                  <Input
                    name="frame7185"
                    placeholder="Entar Email Address"
                    className="font-nunito p-0 placeholder:text-gray-500 text-[15px] text-left w-full"
                    wrapClassName="mt-[27px] w-full"
                    type="email"
                    color="white_A700"
                    variant="fill"
                  ></Input>
                  <Button
                    className="cursor-pointer font-medium font-roboto leading-[normal] min-w-[138px] mt-[15px] rounded-[5px] text-[15px] text-center"
                    color="deep_orange_A200"
                  >
                    Subscribe
                  </Button>
                  <Text
                    className="mt-3 text-[15px] text-gray-400"
                    size="txtNunitoRegular15Gray400"
                  >
                    We never span you!
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[23%] md:w-full">
                  <ul className="flex flex-col items-start justify-start w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-lg text-white-A700">
                        <Text size="txtNunitoBold18">Contact</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <Line className="bg-red-500 h-[3px] mt-2.5" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-2.5 items-start justify-start mt-[22px]">
                          <Img
                            className="h-[21px] mt-[5px]"
                            src="images/img_search.svg"
                            alt="search_One"
                          />
                          <Text
                            className="leading-[23.00px] text-[15px] text-white-A700 w-[91%] sm:w-full"
                            size="txtNunitoRegular15WhiteA700"
                          >
                            121 King St, Melbourne den 3000, Australia
                          </Text>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-2.5 items-center justify-start mt-[17px]">
                          <Img
                            className="h-3.5"
                            src="images/img_lock.svg"
                            alt="lock"
                          />
                          <Text
                            className="text-[15px] text-white-A700"
                            size="txtNunitoRegular15WhiteA700"
                          >
                            Info@example.com
                          </Text>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-[13px] items-start justify-start mt-6">
                          <Img
                            className="h-[17px] mt-0.5"
                            src="images/img_call_white_a700.svg"
                            alt="call_Four"
                          />
                          <Text
                            className="text-[15px] text-white-A700"
                            size="txtNunitoRegular15WhiteA700"
                          >
                            +91 999999999
                          </Text>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default RealEstateWebsitePage;
