import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <div className="w-full h-[screen]  ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col back bg-transparent w-full h-[100vh]">
        <Header />
        <Hero />
        <SellerCard />
      </main>
    </div>
  )
}

export default Home

function Header() {
  return (
    <div className="w-full bg-transparent  cursor-pointer px-9 pt-5  flex items-center justify-between ">
      <div className="relative">
        <img src="./Image/logo.svg" alt="logo" />
      </div>
      <div className="flex cursor-pointer ml-[110px] nav filter drop-shadow-sm text-[18px] items-end text-[#fff] gap-9 justify-items-end ">
        <h4>Marketplace</h4>
        <h4>Artists</h4>
        <h4>Community</h4>
      </div>
      <div className="text-[#fff] cursor-pointer filter text-[18px]">
        <div className="border-2 rounded-[8px] pt-2 pb-2 pl-6 pr-6 border-[#FFA503]">
          <button>Login</button>
        </div>
      </div>
      <div className=" absolute bg-[#D79F45] opacity-[1] top-0 bottom-0 w-[200px] blur-[220px] h-[200px] filter"></div>
    </div>
  )
}
function Hero() {
  return (
    <div className="flex  bg-transparent text-width pt-20 h-[100vh] flex-col items-center w-[50%] justify-center">
      <div className="text-[#fff] text font-[600] w-[549px] text-start leading-[57px] text-[48px] bg-transparent filter drop-shadow-sm">
        <span className="text-[#FFA503] font-[600] bg-transparent leading-[57px]">
          Discover
        </span>{" "}
        unique NFTs and Digital arts on our platform with ease
      </div>
      <div className="flex  gap-4 pt-10 ">
        <input
          type="email"
          className="w-[310px] bg-[#0c0c0c] outline-none border-2 rounded-[8px] pl-4 text-[#fff] text-[19px] border-[#FFA503]"
          placeholder="Enter your email to get started"
        />
        <div className="rounded-[8px] relative w-[80px] flex flex-col items-center justify-center bg-[#FFA503]">
          <img
            className="top-0 bottom-0 bg-transparent"
            src="Image/Rocket.svg"
            alt=""
          />
        </div>
      </div>
      <TradeOption />
    </div>
  )
}

function TradeOption() {
  return (
    <div className="pt-[130px] max-md:ml-[-90px]">
      <h3 className="text-[26px] leading-[28px] font-[500] text-[white]">
        Trade with any of the following Coins
      </h3>
      <div className="flex items-center  gap-4 object-fill pt-10">
        <img src="Image/1.svg" alt="" />
        <img src="Image/2.svg" alt="" />
        <img src="Image/3.svg" alt="" />
        <img src="Image/4.svg" alt="" />
        <img src="Image/5.svg" alt="" />
        <img src="Image/6.svg" alt="" />
        <img src="Image/7.svg" alt="" />
      </div>
    </div>
  )
}

function SellerCard() {
  return (
    <div className="flex p-40 absolute bottom-0 top-[1690px] bg-transparent flex-col items-start justify-center  w-[100%] text-white">
      <div className="flex flex-col bg-transparent items-start justify-center">
        <h2 className="items-start pb-10 text-[27px] text-[#FFA503]">
          Best Sellers
        </h2>
        <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:grid-rows-1 grid-rows-4 bg-transparent   gap-4">
          <div className=" relative w-[80%] barder-radius bg-transparent h-[500px]">
            <img
              className="barder-radius w-[100%]"
              src="Image/image.svg"
              alt="image"
            />
            <div className="backgroud  absolute bottom-0 left-0 top-[47%] w-full h-[19%] flex bg-transparent">
              <div className="justify-start relative pt-5 w-[50%] bg-transparent pl-2 flex flex-col">
                <h5 className="text-[20px] font-[600] leading-[33px]">
                  God of War
                </h5>
                <a
                  href="/"
                  className="text-[13px] underline font-[600] leading-[33px]"
                >
                  ToomuchLag
                </a>
              </div>
              <div className="  items-center justify-center w-[50%] bg-transparent">
                <div className=" pt-2  flex bg-transparent">
                  <img src="Image/icon.svg" alt="" />
                  <h4 className="text-[18px] font-[600] leading-[33px]">
                    247eth
                  </h4>
                </div>
                <div className=" pt-2 pl-2 bg-transparent">
                  <button className="border-2 pt-1 pb-1 pl-2 pr-2 rounded-[7px] border-white text-[14px] font-[400] leading-[19px] ">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
            <div className=" absolute top-[42%] bottom-0 bg-transparent">
              <img className="w-[70%]" src="Image/Group.svg" alt="" />
            </div>
          </div>
          <div className=" relative w-[80%] barder-radius bg-transparent h-[500px]">
            <img
              className="barder-radius w-[100%]"
              src="Image/image.svg"
              alt="image"
            />
            <div className="backgroud  absolute bottom-0 left-0 top-[47%] w-full h-[19%] flex bg-transparent">
              <div className="justify-start relative pt-5 w-[50%] bg-transparent pl-2 flex flex-col">
                <h5 className="text-[20px] font-[600] leading-[33px]">
                  God of War
                </h5>
                <a
                  href="/"
                  className="text-[13px] underline font-[600] leading-[33px]"
                >
                  ToomuchLag
                </a>
              </div>
              <div className="  items-center justify-center w-[50%] bg-transparent">
                <div className=" pt-2  flex bg-transparent">
                  <img src="Image/icon.svg" alt="" />
                  <h4 className="text-[18px] font-[600] leading-[33px]">
                    247eth
                  </h4>
                </div>
                <div className=" pt-2 pl-2 bg-transparent">
                  <button className="border-2 pt-1 pb-1 pl-2 pr-2 rounded-[7px] border-white text-[14px] font-[400] leading-[19px] ">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
            <div className=" absolute top-[42%] bottom-0 bg-transparent">
              <img className="w-[70%]" src="Image/Group.svg" alt="" />
            </div>
          </div>
          <div className=" relative w-[80%] barder-radius bg-transparent h-[500px]">
            <img
              className="barder-radius w-[100%]"
              src="Image/image.svg"
              alt="image"
            />
            <div className="backgroud  absolute bottom-0 left-0 top-[47%] w-full h-[19%] flex bg-transparent">
              <div className="justify-start relative pt-5 w-[50%] bg-transparent pl-2 flex flex-col">
                <h5 className="text-[20px] font-[600] leading-[33px]">
                  God of War
                </h5>
                <a
                  href="/"
                  className="text-[13px] underline font-[600] leading-[33px]"
                >
                  ToomuchLag
                </a>
              </div>
              <div className="  items-center justify-center w-[50%] bg-transparent">
                <div className=" pt-2  flex bg-transparent">
                  <img src="Image/icon.svg" alt="" />
                  <h4 className="text-[18px] font-[600] leading-[33px]">
                    247eth
                  </h4>
                </div>
                <div className=" pt-2 pl-2 bg-transparent">
                  <button className="border-2 pt-1 pb-1 pl-2 pr-2 rounded-[7px] border-white text-[14px] font-[400] leading-[19px] ">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
            <div className=" absolute top-[42%] bottom-0 bg-transparent">
              <img className="w-[70%]" src="Image/Group.svg" alt="" />
            </div>
          </div>
          <div className=" relative w-[80%] barder-radius bg-transparent h-[500px]">
            <img
              className="barder-radius w-[100%]"
              src="Image/image.svg"
              alt="image"
            />
            <div className="backgroud  absolute bottom-0 left-0 top-[47%] w-full h-[19%] flex bg-transparent">
              <div className="justify-start relative pt-5 w-[50%] bg-transparent pl-2 flex flex-col">
                <h5 className="text-[20px] font-[600] leading-[33px]">
                  God of War
                </h5>
                <a
                  href="/"
                  className="text-[13px] underline font-[600] leading-[33px]"
                >
                  ToomuchLag
                </a>
              </div>
              <div className="  items-center justify-center w-[50%] bg-transparent">
                <div className=" pt-2  flex bg-transparent">
                  <img src="Image/icon.svg" alt="" />
                  <h4 className="text-[18px] font-[600] leading-[33px]">
                    247eth
                  </h4>
                </div>
                <div className=" pt-2 pl-2 bg-transparent">
                  <button className="border-2 pt-1 pb-1 pl-2 pr-2 rounded-[7px] border-white text-[14px] font-[400] leading-[19px] ">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
            <div className=" absolute top-[42%] bottom-0 bg-transparent">
              <img className="w-[70%]" src="Image/Group.svg" alt="" />
            </div>
          </div>
          <div className=" relative w-[80%] barder-radius bg-transparent h-[500px]">
            <img
              className="barder-radius w-[100%]"
              src="Image/image.svg"
              alt="image"
            />
            <div className="backgroud  absolute bottom-0 left-0 top-[47%] w-full h-[19%] flex bg-transparent">
              <div className="justify-start relative pt-5 w-[50%] bg-transparent pl-2 flex flex-col">
                <h5 className="text-[20px] font-[600] leading-[33px]">
                  God of War
                </h5>
                <a
                  href="/"
                  className="text-[13px] underline font-[600] leading-[33px]"
                >
                  ToomuchLag
                </a>
              </div>
              <div className="  items-center justify-center w-[50%] bg-transparent">
                <div className=" pt-2  flex bg-transparent">
                  <img src="Image/icon.svg" alt="" />
                  <h4 className="text-[18px] font-[600] leading-[33px]">
                    247eth
                  </h4>
                </div>
                <div className=" pt-2 pl-2 bg-transparent">
                  <button className="border-2 pt-1 pb-1 pl-2 pr-2 rounded-[7px] border-white text-[14px] font-[400] leading-[19px] ">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
            <div className=" absolute top-[42%] bottom-0 bg-transparent">
              <img className="w-[70%]" src="Image/Group.svg" alt="" />
            </div>
          </div>
          <div className=" relative w-[75%] barder-radius bg-transparent h-[500px]">
            <img
              className="barder-radius w-[100%]"
              src="Image/image.svg"
              alt="image"
            />
            <div className="backgroud  absolute bottom-0 left-0 top-[47%] w-full h-[19%] flex bg-transparent">
              <div className="justify-start relative pt-5 w-[50%] bg-transparent pl-2 flex flex-col">
                <h5 className="text-[20px] font-[600] leading-[33px]">
                  God of War
                </h5>
                <a
                  href="/"
                  className="text-[13px] underline font-[600] leading-[33px]"
                >
                  ToomuchLag
                </a>
              </div>
              <div className="  items-center justify-center w-[50%] bg-transparent">
                <div className=" pt-2  flex bg-transparent">
                  <img src="Image/icon.svg" alt="" />
                  <h4 className="text-[18px] font-[600] leading-[33px]">
                    247eth
                  </h4>
                </div>
                <div className=" pt-2 pl-2 bg-transparent">
                  <button className="border-2 pt-1 pb-1 pl-2 pr-2 rounded-[7px] border-white text-[14px] font-[400] leading-[19px] ">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
            <div className=" absolute top-[42%] bottom-0 bg-transparent">
              <img className="w-[70%]" src="Image/Group.svg" alt="" />
            </div>
          </div>
          <div className=" relative w-[80%] barder-radius bg-transparent h-[500px]">
            <img
              className="barder-radius w-[100%]"
              src="Image/image.svg"
              alt="image"
            />
            <div className="backgroud  absolute bottom-0 left-0 top-[47%] w-full h-[19%] flex bg-transparent">
              <div className="justify-start relative pt-5 w-[50%] bg-transparent pl-2 flex flex-col">
                <h5 className="text-[20px] font-[600] leading-[33px]">
                  God of War
                </h5>
                <a
                  href="/"
                  className="text-[13px] underline font-[600] leading-[33px]"
                >
                  ToomuchLag
                </a>
              </div>
              <div className="  items-center justify-center w-[50%] bg-transparent">
                <div className=" pt-2  flex bg-transparent">
                  <img src="Image/icon.svg" alt="" />
                  <h4 className="text-[18px] font-[600] leading-[33px]">
                    247eth
                  </h4>
                </div>
                <div className=" pt-2 pl-2 bg-transparent">
                  <button className="border-2 pt-1 pb-1 pl-2 pr-2 rounded-[7px] border-white text-[14px] font-[400] leading-[19px] ">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
            <div className=" absolute top-[42%] bottom-0 bg-transparent">
              <img className="w-[70%]" src="Image/Group.svg" alt="" />
            </div>
          </div>
          <div className=" relative w-[80%] barder-radius bg-transparent h-[500px]">
            <img
              className="barder-radius w-[100%]"
              src="Image/image.svg"
              alt="image"
            />
            <div className="backgroud  absolute bottom-0 left-0 top-[47%] w-full h-[19%] flex bg-transparent">
              <div className="justify-start relative pt-5 w-[50%] bg-transparent pl-2 flex flex-col">
                <h5 className="text-[20px] font-[600] leading-[33px]">
                  God of War
                </h5>
                <a
                  href="/"
                  className="text-[13px] underline font-[600] leading-[33px]"
                >
                  ToomuchLag
                </a>
              </div>
              <div className="  items-center justify-center w-[50%] bg-transparent">
                <div className=" pt-2  flex bg-transparent">
                  <img src="Image/icon.svg" alt="" />
                  <h4 className="text-[18px] font-[600] leading-[33px]">
                    247eth
                  </h4>
                </div>
                <div className=" pt-2 pl-2 bg-transparent">
                  <button className="border-2 pt-1 pb-1 pl-2 pr-2 rounded-[7px] border-white text-[14px] font-[400] leading-[19px] ">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
            <div className=" absolute top-[42%] bottom-0 bg-transparent">
              <img className="w-[70%]" src="Image/Group.svg" alt="" />
            </div>
          </div>
          <div className=" relative w-[80%] barder-radius bg-transparent h-[500px]">
            <img
              className="barder-radius w-[100%]"
              src="Image/image.svg"
              alt="image"
            />
            <div className="backgroud  absolute bottom-0 left-0 top-[47%] w-full h-[19%] flex bg-transparent">
              <div className="justify-start relative pt-5 w-[50%] bg-transparent pl-2 flex flex-col">
                <h5 className="text-[20px] font-[600] leading-[33px]">
                  God of War
                </h5>
                <a
                  href="/"
                  className="text-[13px] underline font-[600] leading-[33px]"
                >
                  ToomuchLag
                </a>
              </div>
              <div className="  items-center justify-center w-[50%] bg-transparent">
                <div className=" pt-2  flex bg-transparent">
                  <img src="Image/icon.svg" alt="" />
                  <h4 className="text-[18px] font-[600] leading-[33px]">
                    247eth
                  </h4>
                </div>
                <div className=" pt-2 pl-2 bg-transparent">
                  <button className="border-2 pt-1 pb-1 pl-2 pr-2 rounded-[7px] border-white text-[14px] font-[400] leading-[19px] ">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
            <div className=" absolute top-[42%] bottom-0 bg-transparent">
              <img className="w-[70%]" src="Image/Group.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
