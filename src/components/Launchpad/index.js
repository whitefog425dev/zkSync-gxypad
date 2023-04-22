import React, { useState } from "react";
import "./custom.css";
import "./main.css";
import "./style.css";
import {
  Logo,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Banner,
  Ico,
  Dp,
} from "../../utils/allImg";
const Launchpad = () => {
  const [sideactive, setSideactive] = useState(false);
  const [setPool, setSetPool] = useState(false);
  const [detail, setDetail] = useState(false);
  const [modal, setModal] = useState(false);
  let openModal = () => {
    setModal(true);
  };
  let closeModal = () => {
    setModal(false);
  };
  let goPool = () => {
    setSetPool(true);
  };
  let changeField = () => {
    let butn = document.getElementById("butn");
    let butn2 = document.getElementById("butn2");
    let butn3 = document.getElementById("butn3");
    let butn4 = document.getElementById("butn4");
    let butn5 = document.getElementById("butn5");
    let butn6 = document.getElementById("butn6");

    butn.classList.add("active");
    butn2.classList.remove("active");
    butn3.classList.remove("active");
    butn4.classList.remove("active");
    butn5.classList.remove("active");
    butn6.classList.remove("active");
    setSetPool(false);
    setDetail(false);
  };
  let changeField2 = () => {
    let butn = document.getElementById("butn");
    let butn2 = document.getElementById("butn2");
    let butn3 = document.getElementById("butn3");
    let butn4 = document.getElementById("butn4");
    let butn5 = document.getElementById("butn5");
    let butn6 = document.getElementById("butn6");

    butn.classList.remove("active");
    butn2.classList.add("active");
    butn3.classList.remove("active");
    butn4.classList.remove("active");
    butn5.classList.remove("active");
    butn6.classList.remove("active");
    setDetail(true);
    // setPool(false);
  };
  let changeField3 = () => {
    let butn = document.getElementById("butn");
    let butn2 = document.getElementById("butn2");
    let butn3 = document.getElementById("butn3");
    let butn4 = document.getElementById("butn4");
    let butn5 = document.getElementById("butn5");
    let butn6 = document.getElementById("butn6");

    butn.classList.remove("active");
    butn2.classList.remove("active");
    butn3.classList.add("active");
    butn4.classList.remove("active");
    butn5.classList.remove("active");
    butn6.classList.remove("active");
    setSetPool(false);
    setDetail(false);
  };
  let changeField4 = () => {
    let butn = document.getElementById("butn");
    let butn2 = document.getElementById("butn2");
    let butn3 = document.getElementById("butn3");
    let butn4 = document.getElementById("butn4");
    let butn5 = document.getElementById("butn5");
    let butn6 = document.getElementById("butn6");

    butn.classList.remove("active");
    butn2.classList.remove("active");
    butn3.classList.remove("active");
    butn4.classList.add("active");
    butn5.classList.remove("active");
    butn6.classList.remove("active");
    setDetail(true);
  };
  let changeField5 = () => {
    let butn = document.getElementById("butn");
    let butn2 = document.getElementById("butn2");
    let butn3 = document.getElementById("butn3");
    let butn4 = document.getElementById("butn4");
    let butn5 = document.getElementById("butn5");
    let butn6 = document.getElementById("butn6");

    butn.classList.remove("active");
    butn2.classList.remove("active");
    butn3.classList.remove("active");
    butn4.classList.remove("active");
    butn5.classList.add("active");
    butn6.classList.remove("active");
    setDetail(true);
  };
  let changeField6 = () => {
    let butn = document.getElementById("butn");
    let butn2 = document.getElementById("butn2");
    let butn3 = document.getElementById("butn3");
    let butn4 = document.getElementById("butn4");
    let butn5 = document.getElementById("butn5");
    let butn6 = document.getElementById("butn6");

    butn.classList.remove("active");
    butn2.classList.remove("active");
    butn3.classList.remove("active");
    butn4.classList.remove("active");
    butn5.classList.remove("active");
    butn6.classList.add("active");
    setDetail(true);
  };
  const toggleBar = () => {
    setSideactive(true);
  };
  const closeBar = () => {
    setSideactive(false);
  };
  window.addEventListener("scroll", function () {
    let header = this.document.querySelector("#header");

    if (window.scrollY > 150) {
      header.classList.add("sticky-menu");
    } else {
      header.classList.remove("sticky-menu");
    }
  });
  return (
    <div>
      <>
        <div className="Toastify" />
        <section className="ant-layout public-layout">
          <div className="sc-bBrHrO dbXRIG">
            <div className="header-top">
              Always make sure the URL is krakenpad.io - bookmark it to be safe.
            </div>
            <div className="content">
              <div
                className={
                  sideactive ? " sidebar-menu active" : "sidebar-menu  "
                }
              >
                <div className="logo">
                  <img src={Logo} alt="logo" />
                </div>
                <div className="menu " id="header">
                  <div className="sc-fLlhyt jjPaUy">
                    <div className="menu-item">
                      <a>
                        <img src={One} alt="Exchage" />
                        <p>Exchage</p>
                      </a>
                    </div>
                    <div className="sc-kgflAQ bDwgSc active">
                      <div className="menu-child">
                        <p>
                          <a href="#">
                            Swap
                          </a>
                        </p>
                        <p>
                          <a href="#">
                            Liquidity
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sc-fLlhyt jjPaUy">
                    <div className="menu-item">
                      <a target="_blank" rel="noreferrer" className="active">
                        <img src={Two} alt="LaunchPad" />
                        <p>LaunchPad</p>
                      </a>
                    </div>
                  </div>
                  <div className="sc-fLlhyt jjPaUy">
                    <div className="menu-item">
                      <a
                        href="#"                        
                      >
                        <img src={Three} alt="Yield Farming" />
                        <p>Yield Farming</p>
                      </a>
                    </div>
                  </div>
                  <div className="sc-fLlhyt jjPaUy">
                    <div className="menu-item">
                      <a href="">
                        <img src={Four} alt="Staking" />
                        <p>Staking</p>{" "}
                        <span style={{ marginLeft: 10, fontSize: 9 }}>
                          Upcoming
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="sc-fLlhyt jjPaUy">
                    <div className="menu-item">
                      <a href="">
                        <img src={Five} alt="Prediction" />
                        <p>Prediction</p>{" "}
                        <span style={{ marginLeft: 10, fontSize: 9 }}>
                          Upcoming
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="sc-fLlhyt jjPaUy">
                    <div className="menu-item">
                      <a href="">
                        <img src={Six} alt="Lottery" />
                        <p>Lottery</p>{" "}
                        <span style={{ marginLeft: 10, fontSize: 9 }}>
                          Upcoming
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  onClick={closeBar}
                  className={
                    sideactive ? " menu-toggle active" : "menu-toggle "
                  }
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div
                onClick={toggleBar}
                className={sideactive ? " menu-toggle  active" : "menu-toggle "}
              >
                <span />
                <span />
                <span />
              </div>
              <div className="content-page">
                <div className="button-connect">
                  <button
                    type="button"
                    data-loading="false"
                    data-hover="false"
                    className="sc-hKMtZM liMtFV"
                    onClick={openModal}
                  >
                    <div>
                      <div>CONNECT WALLET</div>
                    </div>
                  </button>
                </div>
                <div>
                  <div>
                    <div className="sc-ezWOiH gulgLz">
                      <div className="sc-bZkfAO hYqWJp">
                        <div className="banner-text">
                          <p>
                            LauncPad platform across all main blockchain
                            networks
                          </p>

                          <p>
                            Kraken Launchpad enables $KRP token holders to take
                            part in some of the most exclusive opportunities in
                            the crypto industry.
                          </p>
                        </div>
                        <div className="content-right">
                          <div className="wrap-image">
                            <img src={Banner} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="wrapper-menu-control-view">
                        <div className="menu-control-view">
                          <ul>
                            <li>
                              <button
                                id="butn"
                                onClick={changeField}
                                className="active"
                              >
                                All (1)
                              </button>
                            </li>
                            <li>
                              <button
                                id="butn2"
                                onClick={changeField2}
                                className=""
                              >
                                On Going (0)
                              </button>
                            </li>
                            <li>
                              <button
                                id="butn3"
                                onClick={changeField3}
                                className=""
                              >
                                Upcoming (1)
                              </button>
                            </li>
                            <li>
                              <button
                                id="butn4"
                                onClick={changeField4}
                                className=""
                              >
                                Completed (0)
                              </button>
                            </li>
                            <li>
                              <button
                                id="butn5"
                                onClick={changeField5}
                                className=""
                              >
                                Participated (0)
                              </button>
                            </li>
                            <li>
                              <button
                                id="butn6"
                                onClick={changeField6}
                                className=""
                              >
                                BNB Chain
                              </button>
                            </li>
                            <li>
                              <div
                                className="ant-select ant-select-single ant-select-show-arrow"
                                style={{ width: 145 }}
                              >
                                <div className="ant-select-selector">
                                  <span className="ant-select-selection-search">
                                    <input
                                      type="search"
                                      autoComplete="off"
                                      className="ant-select-selection-search-input"
                                      role="combobox"
                                      aria-haspopup="listbox"
                                      aria-owns="rc_select_0_list"
                                      aria-autocomplete="list"
                                      aria-controls="rc_select_0_list"
                                      aria-activedescendant="rc_select_0_list_0"
                                      readOnly=""
                                      unselectable="on"
                                      defaultValue=""
                                      style={{ opacity: 0 }}
                                      id="rc_select_0"
                                    />
                                  </span>
                                  <span className="ant-select-selection-item">
                                    <img src={Ico} alt="" />
                                    <select className="seleect" name="" id="">
                                      <option value="">Ethereum</option>
                                      <option value="">BNB Chain</option>
                                      <option value="">Solana</option>
                                      <option value="">Avalanche</option>
                                      <option value="">Matic (Polygon)</option>
                                      <option value="">Aptos Chain</option>
                                      <option value="">BNB Chain</option>
                                      <option value="">Matic Mumbai</option>
                                    </select>
                                  </span>
                                </div>
                                <span
                                  className="ant-select-arrow"
                                  unselectable="on"
                                  aria-hidden="true"
                                  style={{ userSelect: "none" }}
                                >
                                  <span
                                    role="img"
                                    aria-label="down"
                                    className="anticon anticon-down ant-select-suffix"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      data-icon="down"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="content-launch-pad">
                        <div className={detail ? "  hide-it" : "  "}>
                          <div
                            className={
                              setPool
                                ? " sc-cxabCf jxZjhP  hide-it"
                                : "sc-cxabCf jxZjhP "
                            }
                          >
                            <div
                              className="ant-row"
                              style={{
                                marginLeft: "-16px",
                                marginRight: "-16px",
                                rowGap: 32,
                              }}
                            >
                              <div
                                className="ant-col ant-col-24 ant-col-lg-8"
                                style={{ paddingLeft: 16, paddingRight: 16 }}
                              >
                                <div className="sc-llJcti kIJdNj">
                                  <div className="item-pool">
                                    <div className="header-info">
                                      <div className="logo">
                                        <img src={Dp} alt="" />
                                      </div>
                                      <div className="name">
                                        <p>ANNOUNCEMENT SOON</p>
                                        <p className="upcoming">Upcoming</p>
                                      </div>
                                    </div>
                                    <div className="item-body">
                                      <div>
                                        <p>Total Raise</p>
                                        <p className="total">---</p>
                                      </div>
                                      <div>
                                        <p>Sale Price</p>
                                        <p className="price">---</p>
                                      </div>
                                      <div>
                                        <p>Sale Start In</p>
                                        <p className="time">---</p>
                                      </div>
                                      <div>
                                        <button
                                          onClick={goPool}
                                          type="button"
                                          data-loading="false"
                                          data-hover="false"
                                          className="sc-hKMtZM liMtFV"
                                        >
                                          <div>View Pool</div>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Pool Area */}
                          <div
                            className={
                              setPool
                                ? " content-pool-detail  "
                                : "content-pool-detail hide-it"
                            }
                          >
                            <div
                              className="ant-row"
                              style={{
                                marginLeft: "-10px",
                                marginRight: "-10px",
                                rowGap: 20,
                              }}
                            >
                              <div
                                className="ant-col ant-col-24 ant-col-order-2 ant-col-lg-16 ant-col-lg-order-1"
                                style={{ paddingLeft: 10, paddingRight: 10 }}
                              >
                                <div className="sc-kLLXSd RnvaS">
                                  <div className="content-left">
                                    <div className="content-left-left">
                                      <img src={Dp} alt="" />
                                    </div>
                                    <div className="content-left-right">
                                      <p className="name">ANNOUNCEMENT SOON</p>
                                      <div className="social">
                                        <ul>
                                          <li>
                                            <a href="">
                                              <img
                                                src="/images/icons/web.png"
                                                alt=""
                                              />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="">
                                              <img
                                                src="/images/icons/youtube.png"
                                                alt=""
                                              />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="">
                                              <img
                                                src="/images/icons/twitter.png"
                                                alt=""
                                              />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="">
                                              <img
                                                src="/images/icons/tele.png"
                                                alt=""
                                              />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <p className="text-content">
                                        A potential project, with the first
                                        collaboration with KrakenPad, supported
                                        by media and advise on technology, is
                                        expected to bring a new breeze in the
                                        blockchain field.
                                      </p>
                                      <div className="box-information">
                                        <div className="information-item contact">
                                          <p>Contract:</p>
                                          <div className="box-address">
                                            <input
                                              readOnly=""
                                              value="
                                              0x0000000000000000000000000000000000000
                                            "
                                            />
                                            <img
                                              src="/images/icons/copy.png"
                                              alt=""
                                            />
                                          </div>
                                        </div>
                                        <div className="information-item">
                                          <p>Swap Rate:</p>
                                          <p>---</p>
                                        </div>
                                        <div className="information-item">
                                          <p>IDO Supply:</p>
                                          <p>---</p>
                                        </div>
                                        <div className="information-item">
                                          <p>Start Pool:</p>
                                          <p>---</p>
                                        </div>
                                        <div className="information-item">
                                          <p>End Pool:</p>
                                          <p>---</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="ant-col ant-col-24 ant-col-order-1 ant-col-lg-8 ant-col-lg-order-2"
                                style={{ paddingLeft: 10, paddingRight: 10 }}
                              >
                                <div className="sc-kLLXSd RnvaS">
                                  <div className="content-right">
                                    <p className="title">End In</p>
                                    <div>
                                      <div className="sc-iIPllB cHzXZh countdown">
                                        <div className="sc-gicCDI llYNbj">
                                          <div>00</div>
                                        </div>
                                        <div className="sc-gicCDI llYNbj">
                                          <div>00</div>
                                        </div>
                                        <div className="sc-gicCDI llYNbj">
                                          <div>00</div>
                                        </div>
                                        <div className="sc-gicCDI llYNbj">
                                          <div>00</div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="process">
                                      <div className="process-top">
                                        <p>0%</p>
                                        <p>--/--BNB</p>
                                      </div>
                                      <div className="process-content">
                                        <div className="ant-slider ant-slider-disabled ant-slider-horizontal">
                                          <div className="ant-slider-rail" />
                                          <div
                                            className="ant-slider-track"
                                            style={{ left: "0%", width: "0%" }}
                                          />
                                          <div className="ant-slider-step" />
                                          <div
                                            className="ant-slider-handle"
                                            role="slider"
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            aria-valuenow={0}
                                            aria-disabled="true"
                                            style={{
                                              left: "0%",
                                              transform: "translateX(-50%)",
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <p>You’re not whitelisted</p>
                                      <div className="box-input-amount">
                                        <div className="box-input-top">
                                          <p>Amount</p>
                                          <p>Max</p>
                                        </div>
                                        <div className="box-input-content">
                                          <input type="text" placeholder={0} />
                                        </div>
                                      </div>
                                      <div style={{ textAlign: "center" }}>
                                        <button
                                          type="button"
                                          data-loading="false"
                                          data-hover="false"
                                          disabled="true"
                                          className="sc-hKMtZM liMtFV"
                                        >
                                          <div>Buy</div>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Pool Area */}
                        </div>
                      </div>
                      <div className="wrapper-footer" style={{ marginTop: 60 }}>
                        <p>Kraken Launchpad V1.0.4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sc-ivTmOn edajDw" />
          {/* Modal */}
          <div>
            <div
              className={
                modal ? "ant-modal-root  " : " ant-modal-root hide-it "
              }
            >
              <div className="ant-modal-mask" />
              <div
                onClick={closeModal}
                tabIndex={-1}
                className="ant-modal-wrap ant-modal-centered"
                role="dialog"
              >
                <div
                  role="document"
                  className="ant-modal modal-connect-wallet"
                  style={{ width: 530, transformOrigin: "763px 75px" }}
                >
                  <div
                    tabIndex={0}
                    aria-hidden="true"
                    style={{
                      width: 0,
                      height: 0,
                      overflow: "hidden",
                      outline: "none",
                    }}
                  />
                  <div className="ant-modal-content">
                    <button
                      onClick={closeModal}
                      type="button"
                      aria-label="Close"
                      className="ant-modal-close"
                    >
                      <span className="ant-modal-close-x">
                        <img src="/images/icons/close.png" alt="" />
                      </span>
                    </button>
                    <div className="ant-modal-body">
                      <div className="sc-hHLeRK XOEkX">
                        <div className="bg-modal">
                          <div className="content-modal">
                            <div className="title">Connect to a Wallet</div>
                            <div
                              className="ant-row"
                              style={{
                                marginLeft: "-12px",
                                marginRight: "-12px",
                                rowGap: 24,
                              }}
                            >
                              <div
                                className="ant-col ant-col-12"
                                style={{ paddingLeft: 12, paddingRight: 12 }}
                              >
                                <div
                                  id="wallet-connect-metamask"
                                  className="sc-dIouRR eGJPTu"
                                >
                                  <div className="modal-title">Metamask</div>
                                  <svg
                                    viewBox="0 0 96 96"
                                    width="40px"
                                    color="text"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="sc-ftvSup efVJa-D"
                                  >
                                    <circle
                                      cx={48}
                                      cy={48}
                                      r={48}
                                      fill="white"
                                    />
                                    <path
                                      d="M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z"
                                      fill="#E17726"
                                    />
                                    <path
                                      d="M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z"
                                      fill="#E27625"
                                    />
                                    <path
                                      d="M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z"
                                      fill="#E27625"
                                    />
                                    <path
                                      d="M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z"
                                      fill="#E27625"
                                    />
                                    <path
                                      d="M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z"
                                      fill="#E27625"
                                    />
                                    <path
                                      d="M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z"
                                      fill="#E27625"
                                    />
                                    <path
                                      d="M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z"
                                      fill="#E27625"
                                    />
                                    <path
                                      d="M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z"
                                      fill="#E27625"
                                    />
                                    <path
                                      d="M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z"
                                      fill="#D5BFB2"
                                    />
                                    <path
                                      d="M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z"
                                      fill="#D5BFB2"
                                    />
                                    <path
                                      d="M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z"
                                      fill="#233447"
                                    />
                                    <path
                                      d="M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z"
                                      fill="#233447"
                                    />
                                    <path
                                      d="M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z"
                                      fill="#CC6228"
                                    />
                                    <path
                                      d="M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z"
                                      fill="#CC6228"
                                    />
                                    <path
                                      d="M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z"
                                      fill="#CC6228"
                                    />
                                    <path
                                      d="M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z"
                                      fill="#CC6228"
                                    />
                                    <path
                                      d="M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z"
                                      fill="#E27525"
                                    />
                                    <path
                                      d="M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z"
                                      fill="#E27525"
                                    />
                                    <path
                                      d="M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z"
                                      fill="#E27525"
                                    />
                                    <path
                                      d="M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z"
                                      fill="#E27525"
                                    />
                                    <path
                                      d="M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z"
                                      fill="#F5841F"
                                    />
                                    <path
                                      d="M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z"
                                      fill="#F5841F"
                                    />
                                    <path
                                      d="M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z"
                                      fill="#C0AC9D"
                                    />
                                    <path
                                      d="M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z"
                                      fill="#161616"
                                    />
                                    <path
                                      d="M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z"
                                      fill="#763E1A"
                                    />
                                    <path
                                      d="M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z"
                                      fill="#763E1A"
                                    />
                                    <path
                                      d="M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z"
                                      fill="#F5841F"
                                    />
                                    <path
                                      d="M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z"
                                      fill="#F5841F"
                                    />
                                    <path
                                      d="M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z"
                                      fill="#F5841F"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div
                                className="ant-col ant-col-12"
                                style={{ paddingLeft: 12, paddingRight: 12 }}
                              >
                                <div
                                  id="wallet-connect-trustwallet"
                                  className="sc-dIouRR eGJPTu"
                                >
                                  <div className="modal-title">TrustWallet</div>
                                  <svg
                                    viewBox="0 0 96 96"
                                    width="40px"
                                    color="text"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="sc-ftvSup efVJa-D"
                                  >
                                    <g clipPath="url(#clip0)">
                                      <path
                                        d="M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z"
                                        fill="#3375BB"
                                      />
                                      <path
                                        d="M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z"
                                        fill="white"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0">
                                        <rect
                                          width={96}
                                          height={96}
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                              </div>
                              <div
                                className="ant-col ant-col-12"
                                style={{ paddingLeft: 12, paddingRight: 12 }}
                              >
                                <div
                                  id="wallet-connect-mathwallet"
                                  className="sc-dIouRR eGJPTu"
                                >
                                  <div className="modal-title">MathWallet</div>
                                  <svg
                                    viewBox="0 0 96 96"
                                    width="40px"
                                    color="text"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="sc-ftvSup efVJa-D"
                                  >
                                    <circle
                                      cx={48}
                                      cy={48}
                                      r={48}
                                      fill="white"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z"
                                      fill="#1D222A"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div
                                className="ant-col ant-col-12"
                                style={{ paddingLeft: 12, paddingRight: 12 }}
                              >
                                <div
                                  id="wallet-connect-tokenpocket"
                                  className="sc-dIouRR eGJPTu"
                                >
                                  <div className="modal-title">TokenPocket</div>
                                  <svg
                                    viewBox="0 0 96 96"
                                    width="40px"
                                    color="text"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="sc-ftvSup efVJa-D"
                                  >
                                    <circle
                                      cx={48}
                                      cy={48}
                                      r={48}
                                      fill="white"
                                    />
                                    <path
                                      d="M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z"
                                      fill="#29AEFF"
                                    />
                                    <path
                                      d="M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z"
                                      fill="#2761E7"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div
                                className="ant-col ant-col-12"
                                style={{ paddingLeft: 12, paddingRight: 12 }}
                              >
                                <div
                                  id="wallet-connect-walletconnect"
                                  className="sc-dIouRR eGJPTu"
                                >
                                  <div className="modal-title">
                                    WalletConnect
                                  </div>
                                  <svg
                                    viewBox="0 0 96 96"
                                    width="40px"
                                    color="text"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="sc-ftvSup efVJa-D"
                                  >
                                    <path
                                      d="M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z"
                                      fill="#3389FB"
                                    />
                                    <path
                                      d="M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z"
                                      fill="white"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div
                                className="ant-col ant-col-12"
                                style={{ paddingLeft: 12, paddingRight: 12 }}
                              >
                                <div
                                  id="wallet-connect-binance chain wallet"
                                  className="sc-dIouRR eGJPTu"
                                >
                                  <div className="modal-title">
                                    Binance Chain Wallet
                                  </div>
                                  <svg
                                    viewBox="0 0 32 32"
                                    width="40px"
                                    color="text"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="sc-ftvSup efVJa-D"
                                  >
                                    <path
                                      d="M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z"
                                      fill="#1E2026"
                                    />
                                    <path
                                      d="M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z"
                                      fill="#F0B90B"
                                    />
                                    <path
                                      d="M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z"
                                      fill="#F0B90B"
                                    />
                                    <path
                                      d="M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z"
                                      fill="#F0B90B"
                                    />
                                    <path
                                      d="M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z"
                                      fill="#F0B90B"
                                    />
                                    <path
                                      d="M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z"
                                      fill="#F0B90B"
                                    />
                                    <path
                                      d="M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z"
                                      fill="#F0B90B"
                                    />
                                    <path
                                      d="M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z"
                                      fill="#F0B90B"
                                    />
                                    <path
                                      d="M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z"
                                      fill="#F0B90B"
                                    />
                                    <path
                                      d="M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z"
                                      fill="#F0B90B"
                                    />
                                    <path
                                      d="M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z"
                                      fill="#F0B90B"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div
                                className="ant-col ant-col-12"
                                style={{ paddingLeft: 12, paddingRight: 12 }}
                              >
                                <div
                                  id="wallet-connect-martian wallet"
                                  className="sc-dIouRR eGJPTu"
                                >
                                  <div className="modal-title">
                                    Martian Wallet
                                  </div>
                                  <svg
                                    viewBox="0 0 32 32"
                                    width="40px"
                                    color="text"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="sc-ftvSup efVJa-D"
                                    style={{
                                      background: "rgb(255, 255, 255)",
                                      borderRadius: "50%",
                                    }}
                                  >
                                    <path
                                      transform="translate(5, 5)"
                                      d="M13.7636 0.0369041C13.7496 0.0537556 13.66 0.193684 13.5648 0.347835C12.9585 1.32847 12.1173 2.51156 11.2294 3.63232C11.0358 3.87677 11.0049 3.91175 10.9819 3.91234C10.9691 3.91265 10.5371 3.36648 10.2197 2.94867C9.52868 2.03896 8.94656 1.20264 8.45957 0.419884C8.26801 0.111983 8.23492 0.0675592 8.19711 0.0675592C8.09867 0.0675592 6.33455 1.64979 5.24484 2.71542C5.08274 2.87395 5.08249 2.87295 5.31298 3.01922C6.52744 3.79 9.25501 5.95574 9.17035 6.08202C9.00096 6.3347 6.16792 9.29498 5.82858 9.57386L5.78186 9.61227L5.74657 9.56706C5.72714 9.5422 5.57181 9.34561 5.40136 9.13023C4.43996 7.91531 3.54229 6.6371 2.93656 5.62053C2.76597 5.33426 2.75942 5.32621 2.71624 5.35036C2.57742 5.42799 0.0971073 8.39047 0.0439775 8.54209C0.0318392 8.57676 0.0534335 8.59753 0.212186 8.70385C0.974129 9.21412 1.87065 9.88627 2.68453 10.5575C3.17436 10.9615 3.74132 11.4513 3.74108 11.4704C3.73913 11.6105 1.27663 13.5516 0.195421 14.2653C0.0256195 14.3774 0.0033384 14.3971 0.00286897 14.4356C0.00181274 14.5252 2.63291 17.6636 2.709 17.6636C2.73964 17.6636 2.76407 17.6291 2.92002 17.3659C3.52198 16.3495 4.42876 15.0601 5.48236 13.7223C5.62273 13.544 5.75211 13.3876 5.76985 13.3746C5.80587 13.3483 5.89318 13.4304 6.76728 14.3114C7.5125 15.0625 9.12167 16.7816 9.18021 16.8892C9.19937 16.9245 9.16472 16.9577 8.64205 17.404C7.41046 18.456 6.25733 19.3318 5.25022 19.9798C5.01451 20.1316 5.01126 20.1114 5.32062 20.4173C6.17403 21.2614 7.97426 22.9006 8.13199 22.9773C8.1803 23.0008 8.15207 23.0381 8.44519 22.5623C8.99021 21.6776 9.76259 20.5872 10.6267 19.4829C10.8049 19.2551 10.9613 19.0644 10.9741 19.0593C11.0696 19.021 12.629 21.1363 13.3933 22.3408C13.5614 22.6057 13.7109 22.8402 13.7254 22.8619C13.7845 22.95 14.0713 22.7165 15.4185 21.4829C16.8727 20.1514 16.915 20.1028 16.725 19.9794C16.1806 19.6263 15.3005 18.9931 14.7144 18.5332C13.8429 17.8493 12.8031 16.9656 12.8031 16.909C12.8031 16.8177 14.7239 14.778 15.8418 13.6821C16.0285 13.499 16.1814 13.3432 16.1814 13.3359C16.1814 13.3091 15.3864 12.3561 14.8857 11.7825L14.6211 11.4795L14.8689 11.195C15.2116 10.8017 15.5724 10.3757 15.896 9.98234C16.229 9.57751 16.1502 9.58252 16.5276 9.94217C16.9449 10.3399 17.472 10.826 17.862 11.1731C18.2373 11.5069 18.2305 11.4584 17.9383 11.7165C17.4191 12.1754 16.1981 13.3124 16.1981 13.3371C16.1981 13.3426 16.267 13.4334 16.3514 13.539C17.4495 14.9146 18.3908 16.242 19.0332 17.3206C19.2424 17.6717 19.2263 17.6624 19.3636 17.5125C20.2084 16.5899 21.9481 14.4972 21.9485 14.4031C21.9486 14.3849 21.8477 14.3069 21.6765 14.1928C20.6601 13.5152 18.2436 11.6038 18.2436 11.4774C18.2436 11.4074 19.7434 10.17 20.6388 9.5014C20.9785 9.24769 21.785 8.68163 21.9186 8.60315C22.0352 8.5346 22.0445 8.55512 21.6964 8.11384C21.031 7.27034 19.9473 5.98966 19.3811 5.37767C19.2587 5.24549 19.2788 5.22971 19.015 5.66559C18.3847 6.70717 17.6 7.82759 16.6663 9.01888C16.3152 9.4669 16.1976 9.6085 16.1815 9.60233C16.071 9.55984 12.8231 6.16725 12.7817 6.05114C12.7729 6.02658 13.718 5.21974 14.3455 4.7161C15.202 4.0286 15.9336 3.49576 16.7762 2.9456C16.8616 2.88981 16.9022 2.85242 16.9022 2.82977C16.9022 2.74851 15.0898 1.07965 14.0394 0.193737C13.7983 -0.00958677 13.801 -0.00806281 13.7636 0.0369041ZM11.1782 4.17098C11.5497 4.63138 12.3708 5.60078 12.6383 5.89474C12.7786 6.0488 12.7925 6.02099 12.3965 6.37642C11.8585 6.8593 11.0167 7.64704 11.0043 7.67909C10.9993 7.69213 11.0174 7.71056 11.537 8.2229C12.5739 9.24535 14.6054 11.4005 14.6054 11.478C14.6054 11.5277 13.159 13.0914 12.3423 13.9247C11.9125 14.3632 11.1362 15.1339 11.0222 15.2353L10.9853 15.268L10.621 14.9112C9.66196 13.9717 8.59944 12.8615 7.70043 11.8596L7.35917 11.4793L7.55793 11.2569C8.55753 10.138 9.74462 8.89676 10.7451 7.92428C10.8673 7.80553 10.9673 7.69866 10.9673 7.68679C10.9673 7.6528 10.359 7.07579 9.6059 6.39541C9.4058 6.21464 9.23744 6.05887 9.23176 6.04927C9.22608 6.03966 9.33381 5.90379 9.47117 5.74734C9.83634 5.33142 10.257 4.83511 10.6364 4.37244C11.0288 3.89409 10.9719 3.91525 11.1782 4.17098ZM6.05937 9.95289C6.41537 10.3847 6.77145 10.8055 7.08166 11.1611C7.39639 11.5219 7.38912 11.4416 7.1337 11.7353C6.78593 12.1351 6.41734 12.5702 6.0994 12.9561C5.74342 13.3882 5.82982 13.3761 5.48098 13.0431C5.05035 12.632 4.59985 12.2158 4.18142 11.8424C3.72885 11.4385 3.72602 11.5231 4.20657 11.0925C4.64279 10.7016 5.22016 10.1667 5.56038 9.83824C5.68026 9.72252 5.78412 9.6313 5.79118 9.63551C5.79826 9.63972 5.91895 9.78255 6.05937 9.95289ZM11.221 15.4945C11.559 15.8161 12.0957 16.3122 12.4384 16.62C12.7974 16.9424 12.7823 16.894 12.5916 17.1122C12.2533 17.4992 11.6426 18.2196 11.3447 18.5834C11.1711 18.7952 11.0194 18.9747 11.0077 18.982C10.9771 19.0012 10.9408 18.9622 10.5963 18.5395C10.264 18.132 9.73626 17.5096 9.4193 17.1516C9.31021 17.0284 9.22345 16.9203 9.2265 16.9116C9.22953 16.9026 9.38292 16.7601 9.56733 16.5946C9.95244 16.2491 10.482 15.7587 10.7745 15.4771C11.017 15.2434 10.9545 15.241 11.221 15.4945Z"
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      fill="black"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div
                                className="ant-col ant-col-12"
                                style={{ paddingLeft: 12, paddingRight: 12 }}
                              >
                                <div
                                  id="wallet-connect-safepal wallet"
                                  className="sc-dIouRR eGJPTu"
                                >
                                  <div className="modal-title">
                                    SafePal Wallet
                                  </div>
                                  <svg
                                    viewBox="0 0 96 96"
                                    width="40px"
                                    color="text"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="sc-ftvSup efVJa-D"
                                  >
                                    <circle
                                      cx={48}
                                      cy={48}
                                      r={48}
                                      fill="#F5F5F5"
                                    />
                                    <path
                                      d="M56.5504425,41.9387033 L56.5504425,50.4659601 L47.3948342,50.4659601 L47.3948342,85.5971142 L45.0078131,84.7075452 C43.8992633,84.2955753 42.1136272,83.5937969 39.9052997,82.5918134 L38.8675775,82.1177881 L38.8675775,14.6817622 L47.9569067,11.8769231 L56.5504425,14.5267861 L56.5504425,23.7259307 L47.9569067,21.0669705 L47.3948342,21.2411155 L47.3948342,41.9387033 L56.5504425,41.9387033 Z M16,50.4659926 L16,21.7739797 L36.1702794,15.548296 L36.1702794,24.7052039 L24.526282,28.3200122 L24.526282,41.9387358 L36.1702794,41.9387358 L36.1702794,81.3806284 L33.591244,80.0543973 C25.5662786,75.923652 16,68.9585019 16,59.2339983 L16,54.6496962 L24.526282,54.6496962 L24.526282,59.2339983 C24.526282,61.2460878 25.5734263,63.3605199 27.6426978,65.5373324 L27.6426978,50.4659926 L16,50.4659926 Z M59.1389325,15.3302574 L79.8040306,21.7261873 L79.8040306,50.4659601 L67.6710627,50.4659601 L67.6710627,62.9111544 C67.6710627,62.9111544 64.9581695,66.4674811 59.1464051,69.4451657 C59.1464051,67.0682164 59.1389325,15.3302574 59.1389325,15.3302574 Z M71.2780734,41.9387033 L71.2780734,28.2783928 L67.6710627,27.1649695 L67.6710627,41.9387033 L71.2780734,41.9387033 Z M71.2780734,59.8661186 L71.2780734,54.6495662 L79.8040306,54.6495662 L79.8040306,59.8661186 C79.8040306,74.3588162 58.7760221,82.7005566 52.330058,84.9127828 L49.9859233,85.7230769 L49.9859233,76.7068496 L51.1311866,76.2744112 C61.1591444,72.5004032 71.2780734,65.962818 71.2780734,59.8661186 Z"
                                      fill="#000000"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    aria-hidden="true"
                    style={{
                      width: 0,
                      height: 0,
                      overflow: "hidden",
                      outline: "none",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          {/* Drop-Down */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
            <div>
              <div
                className="ant-select-dropdown ant-select-dropdown-placement-bottomRight  ant-select-dropdown-hidden"
                style={{ minWidth: 145, width: 145, left: 47, top: "-788px" }}
              >
                <div>
                  <div
                    role="listbox"
                    id="rc_select_0_list"
                    style={{ height: 0, width: 0, overflow: "hidden" }}
                  >
                    <div
                      role="option"
                      id="rc_select_0_list_0"
                      aria-selected="true"
                    >
                      Ethereum
                    </div>
                    <div
                      role="option"
                      id="rc_select_0_list_1"
                      aria-selected="false"
                    >
                      BNB Chain
                    </div>
                  </div>
                  <div
                    className="rc-virtual-list"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="rc-virtual-list-holder"
                      style={{
                        maxHeight: 256,
                        overflowY: "hidden",
                        overflowAnchor: "none",
                      }}
                    >
                      <div>
                        <div
                          className="rc-virtual-list-holder-inner"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <div
                            aria-selected="true"
                            className="ant-select-item ant-select-item-option ant-select-item-option-active ant-select-item-option-selected"
                          >
                            <div className="ant-select-item-option-content">
                              <img src="/images/icons/1.png" alt="" /> Ethereum
                            </div>
                            <span
                              className="ant-select-item-option-state"
                              unselectable="on"
                              aria-hidden="true"
                              style={{ userSelect: "none" }}
                            />
                          </div>
                          <div
                            aria-selected="false"
                            className="ant-select-item ant-select-item-option"
                          >
                            <div className="ant-select-item-option-content">
                              <img src="/images/icons/2.png" alt="" /> BNB Chain
                            </div>
                            <span
                              className="ant-select-item-option-state"
                              unselectable="on"
                              aria-hidden="true"
                              style={{ userSelect: "none" }}
                            />
                          </div>
                          <div
                            aria-selected="false"
                            className="ant-select-item ant-select-item-option"
                          >
                            <div className="ant-select-item-option-content">
                              <img src="/images/icons/3.png" alt="" /> Solana
                            </div>
                            <span
                              className="ant-select-item-option-state"
                              unselectable="on"
                              aria-hidden="true"
                              style={{ userSelect: "none" }}
                            />
                          </div>
                          <div
                            aria-selected="false"
                            className="ant-select-item ant-select-item-option"
                          >
                            <div className="ant-select-item-option-content">
                              <img src="/images/icons/4.png" alt="" /> Avalanche
                            </div>
                            <span
                              className="ant-select-item-option-state"
                              unselectable="on"
                              aria-hidden="true"
                              style={{ userSelect: "none" }}
                            />
                          </div>
                          <div
                            aria-selected="false"
                            className="ant-select-item ant-select-item-option"
                          >
                            <div className="ant-select-item-option-content">
                              <img src="/images/icons/5.png" alt="" /> Matic
                              (polygon)
                            </div>
                            <span
                              className="ant-select-item-option-state"
                              unselectable="on"
                              aria-hidden="true"
                              style={{ userSelect: "none" }}
                            />
                          </div>
                          <div
                            aria-selected="false"
                            className="ant-select-item ant-select-item-option"
                          >
                            <div className="ant-select-item-option-content">
                              <img src="/images/icons/6.png" alt="" /> Aptos
                              Chain
                            </div>
                            <span
                              className="ant-select-item-option-state"
                              unselectable="on"
                              aria-hidden="true"
                              style={{ userSelect: "none" }}
                            />
                          </div>
                          <div
                            styles="[object Object]"
                            aria-selected="false"
                            className="ant-select-item ant-select-item-option"
                          >
                            <div className="ant-select-item-option-content">
                              <img src="/images/icons/7.png" alt="" /> BNB Chain
                              <span
                                style={{
                                  position: "absolute",
                                  right: 0,
                                  background:
                                    "linear-gradient(99.46deg, rgb(250, 0, 255) -10.9%, rgb(0, 224, 255) 97.13%, rgb(42, 212, 249) 97.14%)",
                                  borderRadius: 5,
                                }}
                              >
                                Testnet
                              </span>
                            </div>
                            <span
                              className="ant-select-item-option-state"
                              unselectable="on"
                              aria-hidden="true"
                              style={{ userSelect: "none" }}
                            />
                          </div>
                          <div
                            styles="[object Object]"
                            aria-selected="false"
                            className="ant-select-item ant-select-item-option"
                          >
                            <div className="ant-select-item-option-content">
                              <img src="/images/icons/8.png" alt="" /> Matic
                              Mumbai
                              <span
                                style={{
                                  position: "absolute",
                                  right: 0,
                                  background:
                                    "linear-gradient(99.46deg, rgb(250, 0, 255) -10.9%, rgb(0, 224, 255) 97.13%, rgb(42, 212, 249) 97.14%)",
                                  borderRadius: 5,
                                }}
                              >
                                Testnet
                              </span>
                            </div>
                            <span
                              className="ant-select-item-option-state"
                              unselectable="on"
                              aria-hidden="true"
                              style={{ userSelect: "none" }}
                            />
                          </div>
                          <div
                            styles="[object Object]"
                            aria-selected="false"
                            className="ant-select-item ant-select-item-option"
                          >
                            <div className="ant-select-item-option-content">
                              <img src="/images/icons/9.png" alt="" /> Aptos
                              Chain
                              <span
                                style={{
                                  position: "absolute",
                                  right: 0,
                                  background:
                                    "linear-gradient(99.46deg, rgb(250, 0, 255) -10.9%, rgb(0, 224, 255) 97.13%, rgb(42, 212, 249) 97.14%)",
                                  borderRadius: 5,
                                }}
                              >
                                Testnet
                              </span>
                            </div>
                            <span
                              className="ant-select-item-option-state"
                              unselectable="on"
                              aria-hidden="true"
                              style={{ userSelect: "none" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="rc-virtual-list-scrollbar rc-virtual-list-scrollbar-show"
                      style={{
                        width: 8,
                        top: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "none",
                      }}
                    >
                      <div
                        className="rc-virtual-list-scrollbar-thumb"
                        style={{
                          width: "100%",
                          height: 128,
                          top: 0,
                          left: 0,
                          position: "absolute",
                          background: "rgba(0, 0, 0, 0.5)",
                          borderRadius: 99,
                          cursor: "pointer",
                          userSelect: "none",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Drop-Down */}
        </section>
      </>
    </div>
  );
};

export default Launchpad;
