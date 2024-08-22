import StocksIndex from "../../component/StockIndex/StockIndex";
import StocksCard from "../../component/StockCard/StockCard";
import ola_logo from "../../assets/svg/ola_logo.svg";
import GTL_logo from "../../assets/svg/GTL_logo.webp";
import MD_ship_logo from "../../assets/svg/GSTK_logo.webp";
import Angel_one_logo from "../../assets/svg/angel_one_logo.webp";

// ...... product and tool .......
import fAndO_icon from "../../assets/svg/product_and_tool/F&O.svg";
import event_icon from "../../assets/svg/product_and_tool/event.svg";
import intraday_icon from "../../assets/svg/product_and_tool/intraday.svg";
import ipo_icon from "../../assets/svg/product_and_tool/ipo.svg";
import screener_icon from "../../assets/svg/product_and_tool/screener.svg";

// ............. top gainers .........
import diviLabs from "../../assets/img/top_gainer/divis_lab_icon.webp";
import varunBeverages from "../../assets/img/top_gainer/varun_beverages_icon.webp";
import titan from "../../assets/img/top_gainer/titan_icon.webp";
import sbiLife from "../../assets/img/top_gainer/sbi_icon.webp";
import nykaa from "../../assets/img/top_gainer/mid_nykaa_icon.webp";
import mazagonShip from "../../assets/img/top_gainer/mid_mazagon_ship_icon.webp";
import patanjaliFood from "../../assets/img/top_gainer/mid_patanjali_food_icon.webp";
import bandhanBank from "../../assets/img/top_gainer/mid_bandhan_bank_icon.webp";
import aloakIndustries from "../../assets/img/top_gainer/small_aloak_industry_icon.webp";
import pnbHouse from "../../assets/img/top_gainer/small_pnb_house_finance_icon.webp";
import centuryTextile from "../../assets/img/top_gainer/small_century_textiles_icon.webp";
import castrolIndia from "../../assets/img/top_gainer/small_castrol_india_icon.webp";

//.......... stock news ...........
import zomato from "../../assets/img/news_stock/zomato_icon.webp";
import Dwarikesh_Sugar from "../../assets/img/news_stock/Dwarikesh_Sugar_icon.webp";
import tata_motors from "../../assets/img/news_stock/tata_moters_icon.webp";
import geojit from "../../assets/img/news_stock/geojit_icon.webp";

// ............. top gainers .........
import cholamandalam_invest from "../../assets/img/top_looser/Cholamandalam_Invest_icon.webp";
import firstsource_soln from "../../assets/img/top_looser/Firstsource_Soln_icon.webp";
import SJVN from "../../assets/img/top_looser/SJVN_icon.webp";
import adani from "../../assets/img/top_looser/adani_icon.webp";
import cyient from "../../assets/img/top_looser/cyient_icon.webp";
import gland from "../../assets/img/top_looser/gland_icon.webp";
import jsw_energy from "../../assets/img/top_looser/jsw_energy_icon.webp";
import mahanagar_gas from "../../assets/img/top_looser/mahanagar_gas_icon.webp";
import mahindra from "../../assets/img/top_looser/mahindra_icon.webp";
import tata from "../../assets/img/top_looser/tata_icon.webp";

// .........imp / comp .............
import "./Stocks.css";
import StockToolsCard from "../../component/StockToolsCard/StockToolsCard";
import TopSector from "../../component/TopSector/TopSector";
import StockMarketCap from "../../component/StockMarketCap/StockMarketCap";
import { useState } from "react";

const Stocks = () => {
  const [topGainActive, setTopGainActive] = useState("large");
  const [topLosersActive, setTopLosersActive] = useState("large");

  return (
    <div className="stocks_main">
      <div className="stocks_width_arrange">
        <div className="stocks_main_content_left">
          <div className="stock_left_index">
            <div className="stock_left_index_title">
              <p>Index</p>
              <button>
                {" "}
                <p id="allIndices">All indices</p>{" "}
              </button>
            </div>
            <div className="stock_left_index_component_boxes">
              <StocksIndex
                title="NIFTY 50"
                valueNo="24,705.57"
                valuePercentage="134.66 (0.56%)"
              />
              <StocksIndex
                title="SENSEX"
                valueNo="80,802.57"
                valuePercentage="137.18 (0.47%)"
              />
              <StocksIndex
                title="BANKNIFTY"
                valueNo="50,803.15"
                valuePercentage="-434.66 (0.86%)"
              />
              <StocksIndex
                title="FINNIFTY"
                valueNo="12,645.47"
                valuePercentage="440.43 (0.32%)"
              />
              <StocksIndex
                title="MIDCPNIFTY"
                valueNo="11,105.21"
                valuePercentage="734.76 (0.56%)"
              />
              <StocksIndex
                title="BANKEX"
                valueNo="54,135.51"
                valuePercentage="114.45 (0.16%)"
              />
            </div>
          </div>
          <div className="stock_left_most_bought_on_groww">
            <div className="stock_left_most_bought_on_groww_title">
              <span>Most Bought on Groww</span>
            </div>
            <div className="stock_left_most_bought_on_groww_component">
              <StocksCard
                logoUrl={ola_logo}
                title="Ola Electric Mobility"
                cost="2.77"
                costPerRate="0.26 (0.19%)"
              />
              <StocksCard
                logoUrl={GTL_logo}
                title="GTL Infrastructure"
                cost="123.19"
                costPerRate="-0.04 (1.42%)"
              />
              <StocksCard
                logoUrl={MD_ship_logo}
                title="Mazagon Dock Ship"
                cost="4,539.65"
                costPerRate="240.1 (5.52%)"
              />
              <StocksCard
                logoUrl={Angel_one_logo}
                title="Angel One"
                cost="2,699.90"
                costPerRate="-3.00 (0.11%)"
              />
            </div>
          </div>
          <div className="stocks_left_product_and_tools">
            <div className="stocks_left_product_and_tools_title">
              <span>Products & tools</span>
            </div>
            <div className="stocks_left_product_and_tools_card_section">
              <StockToolsCard iconUrl={fAndO_icon} title="F&O" />
              <StockToolsCard iconUrl={event_icon} title="Event" />
              <StockToolsCard iconUrl={intraday_icon} title="Intraday" />
              <StockToolsCard iconUrl={ipo_icon} title="IPO" />
              <StockToolsCard iconUrl={screener_icon} title="Screener" />
            </div>
          </div>
          <div className="stocks_left_top_gainers">
            <div className="stocks_left_top_gainers_heading">
              <span className="stocks_left_top_gainers_heading_title">
                Top Gainer
              </span>
              <span className="stocks_left_top_gainers_heading_seeMore">
                <button>See more</button>
              </span>
            </div>
            <div className="stocks_left_top_gainers_filter">
              <button
                className="stocks_left_top_gainers_filter_large"
                id={
                  topGainActive === "large"
                    ? "stocks_left_top_gainers_filter_active"
                    : null
                }
                onClick={() => {
                  setTopGainActive("large");
                }}
              >
                Large
              </button>
              <button
                className="stocks_left_top_gainers_filter_mid"
                id={
                  topGainActive === "mid"
                    ? "stocks_left_top_gainers_filter_active"
                    : null
                }
                onClick={() => {
                  setTopGainActive("mid");
                }}
              >
                Mid
              </button>
              <button
                className="stocks_left_top_gainers_filter_small"
                id={
                  topGainActive === "small"
                    ? "stocks_left_top_gainers_filter_active"
                    : null
                }
                onClick={() => {
                  setTopGainActive("small");
                }}
              >
                Small
              </button>
            </div>
            <div className="stocks_left_top_gainers_card_component">
              {topGainActive === "large" ? (
                <>
                  <StocksCard
                    logoUrl={diviLabs}
                    title="Divi's Labs"
                    cost="4,980.80"
                    costPerRate="177.65 (3.76%)"
                  />
                  <StocksCard
                    logoUrl={varunBeverages}
                    title="Varun Beverages"
                    cost="1,546.10"
                    costPerRate="54.50 (4.69%)"
                  />
                  <StocksCard
                    logoUrl={titan}
                    title="Titan"
                    cost="3,560.88"
                    costPerRate="85.26 (2.16%)"
                  />
                  <StocksCard
                    logoUrl={sbiLife}
                    title="SBI Life Insurance"
                    cost="1,800.60"
                    costPerRate="39.3 (2.24%)"
                  />
                </>
              ) : topGainActive === "mid" ? (
                <>
                  <StocksCard
                    logoUrl={nykaa}
                    title="Nykaa"
                    cost="210.39"
                    costPerRate="18.17 (9.48%)"
                  />
                  <StocksCard
                    logoUrl={mazagonShip}
                    title="Mazagon Dock Ship"
                    cost="4,593.2"
                    costPerRate="240.12 (5.52%)"
                  />
                  <StocksCard
                    logoUrl={patanjaliFood}
                    title="Patanjali Foods"
                    cost="1,901.32"
                    costPerRate="79.04 (4.36%)"
                  />
                  <StocksCard
                    logoUrl={bandhanBank}
                    title="Bandhan Bank"
                    cost="203.77"
                    costPerRate="6.84 (3.42%)"
                  />
                </>
              ) : (
                <>
                  <StocksCard
                    logoUrl={aloakIndustries}
                    title="Alok Industries"
                    cost="28.32"
                    costPerRate="2.10 (10.7%)"
                  />
                  <StocksCard
                    logoUrl={pnbHouse}
                    title="PNB Housing Finance"
                    cost="892.21"
                    costPerRate="17.21 (0.61%)"
                  />
                  <StocksCard
                    logoUrl={centuryTextile}
                    title="Century Textiles"
                    cost="2,300.10"
                    costPerRate="152.66 (7.91%)"
                  />
                  <StocksCard
                    logoUrl={castrolIndia}
                    title="Castrol India"
                    cost="268.90"
                    costPerRate="17.80 (7.10%)"
                  />
                </>
              )}
            </div>
          </div>
          <div className="stocks_left_in_news">
            <div className="stocks_left_in_news_heading">
              <span className="stocks_left_in_news_heading_title">
                Stocks in News
              </span>
              <button className="stocks_left_in_news_heading_news_box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-newspaper"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8" />
                  <path d="M15 18h-5" />
                  <path d="M10 6h8v4h-8V6Z" />
                </svg>
                <p>News</p>
              </button>
            </div>
            <div className="stocks_left_in_news_card_component">
              <StocksCard
                logoUrl={zomato}
                title="Zomato"
                cost="42.77"
                costPerRate="-1.21 (0.29%)"
              />
              <StocksCard
                logoUrl={Dwarikesh_Sugar}
                title="Dwarikesh Sugar"
                cost="828.77"
                costPerRate="12.26 (23.19%)"
              />
              <StocksCard
                logoUrl={tata_motors}
                title="Tata Motors"
                cost="1070.76"
                costPerRate="14.08 (1.39%)"
              />
              <StocksCard
                logoUrl={geojit}
                title="Geojit Financial Services"
                cost="212.12"
                costPerRate="-4.26 (2.31%)"
              />
            </div>
          </div>
          <div className="stocks_left_top_losers">
            <div className="stocks_left_top_losers_heading">
              <span className="stocks_left_top_losers_heading_title">
                Top Losers
              </span>
              <span className="stocks_left_top_losers_heading_seeMore">
                <button>See more</button>
              </span>
            </div>
            <div className="stocks_left_top_losers_filter">
              <button
                className="stocks_left_top_losers_filter_large"
                id={
                  topLosersActive === "large"
                    ? "stocks_left_top_losers_filter_active"
                    : null
                }
                onClick={() => {
                  setTopLosersActive("large");
                }}
              >
                Large
              </button>
              <button
                className="stocks_left_top_losers_filter_mid"
                id={
                  topLosersActive === "mid"
                    ? "stocks_left_top_losers_filter_active"
                    : null
                }
                onClick={() => {
                  setTopLosersActive("mid");
                }}
              >
                Mid
              </button>
              <button
                className="stocks_left_top_losers_filter_small"
                id={
                  topLosersActive === "small"
                    ? "stocks_left_top_losers_filter_active"
                    : null
                }
                onClick={() => {
                  setTopLosersActive("small");
                }}
              >
                Small
              </button>
            </div>
            <div className="stocks_left_top_losers_card_component">
              {topLosersActive === "large" ? (
                <>
                  <StocksCard
                    logoUrl={adani}
                    title="Adani"
                    cost="2,212.80"
                    costPerRate="-177.65 (13.76%)"
                  />
                  <StocksCard
                    logoUrl={firstsource_soln}
                    title="Firstsource Soln"
                    cost="546.10"
                    costPerRate="-52.50 (4.69%)"
                  />
                  <StocksCard
                    logoUrl={SJVN}
                    title="SJVN"
                    cost="260.88"
                    costPerRate="-85.26 (2.16%)"
                  />
                  <StocksCard
                    logoUrl={cholamandalam_invest}
                    title="Cholamandalam Invest"
                    cost="200.60"
                    costPerRate="-69.3 (2.24%)"
                  />
                </>
              ) : topLosersActive === "mid" ? (
                <>
                  <StocksCard
                    logoUrl={cyient}
                    title="Cyient"
                    cost="310.39"
                    costPerRate="-18.17 (9.48%)"
                  />
                  <StocksCard
                    logoUrl={gland}
                    title="Gland"
                    cost="693.2"
                    costPerRate="-240.12 (5.52%)"
                  />
                  <StocksCard
                    logoUrl={jsw_energy}
                    title="JWS Energy"
                    cost="101.32"
                    costPerRate="-29.04 (4.36%)"
                  />
                  <StocksCard
                    logoUrl={bandhanBank}
                    title="Bandhan Bank"
                    cost="203.77"
                    costPerRate="-43.84 (3.42%)"
                  />
                </>
              ) : (
                <>
                  <StocksCard
                    logoUrl={mahanagar_gas}
                    title="Mahanagar Gas"
                    cost="28.32"
                    costPerRate="-22.10 (10.7%)"
                  />
                  <StocksCard
                    logoUrl={pnbHouse}
                    title="PNB Housing Finance"
                    cost="392.21"
                    costPerRate="-17.21 (0.61%)"
                  />
                  <StocksCard
                    logoUrl={mahindra}
                    title="Century Textiles"
                    cost="990.10"
                    costPerRate="-252.66 (7.91%)"
                  />
                  <StocksCard
                    logoUrl={tata}
                    title="Tata Motors"
                    cost="1,128.90"
                    costPerRate="-57.80 (7.10%)"
                  />
                </>
              )}
            </div>
          </div>
          <div className="stocks_left_top_sector">
            <div className="stocks_left_top_sector_heading">
              <span>Top Sectors</span>
              <button>
                <p>See more</p>
              </button>
            </div>
            <div className="stocks_left_top_sector_card_component">
              <TopSector title="Banking" value="41" />
              <TopSector title="Energy" value="99" />
              <TopSector title="Healthcare" value="235" />
              <TopSector title="FMGC" value="222" />
              <TopSector title="Tele-communication" value="47" />
              <TopSector title="Auotmobile" value="145" />
              <TopSector title="Media & Entertainment" value="105" />
            </div>
          </div>
          <div className="stocks_left_market_cap">
            <div className="stocks_left_market_cap_heading">
              <span className="stocks_left_market_cap_heading_title">
                Top by Market Cap
              </span>
              <button className="stocks_left_market_cap_heading_seeMore">
                <p>See more</p>
              </button>
            </div>
            <div className="stocks_left_market_cap_card_component_container">
              <div className="stocks_left_market_cap_card_component_container_main">
                <div className="stocks_left_market_cap_head_title_section">
                  <div className="stocks_left_market_cap_head_title_section_arrange_width">
                    <div className="stocks_left_market_cap_head_title_section_company_and_graph">
                      <div className="stocks_left_market_cap_head_title_section_company">
                        <span>Company</span>
                      </div>
                    </div>
                    <div className="stocks_left_market_cap_head_title_section_price_and_watchlist">
                      <div className="stocks_left_market_cap_head_title_section_price">
                        <span>Market Price</span>
                      </div>
                      <div className="stocks_left_market_cap_head_title_section_watchlist">
                        <span>Watchlist</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="stocks_left_market_cap_card_component_section">
                  <StockMarketCap
                    companyName="Toyota"
                    cost="3,287.40"
                    costPerRate="0.56 (0.17%)"
                  />
                  <StockMarketCap
                    companyName="Ford"
                    cost="2,998.15"
                    costPerRate="1.22 (0.41%)"
                  />
                  <StockMarketCap
                    companyName="General Motors"
                    cost="5,045.75"
                    costPerRate="-2.45 (0.48%)"
                  />
                  <StockMarketCap
                    companyName="Tesla"
                    cost="8,712.90"
                    costPerRate="3.89 (0.65%)"
                  />
                  <StockMarketCap
                    companyName="BMW"
                    cost="7,132.10"
                    costPerRate="0.95 (0.13%)"
                  />
                  <StockMarketCap
                    companyName="Volkswagen"
                    cost="4,882.65"
                    costPerRate="0.77 (0.25%)"
                  />
                  <StockMarketCap
                    companyName="Nissan"
                    cost="3,445.80"
                    costPerRate="-1.30 (0.38%)"
                  />
                  <StockMarketCap
                    companyName="Hyundai"
                    cost="5,301.20"
                    costPerRate="0.99 (0.19%)"
                  />
                  <StockMarketCap
                    companyName="Mercedes-Benz"
                    cost="6,732.50"
                    costPerRate="2.12 (0.31%)"
                  />
                  <StockMarketCap
                    companyName="Chevrolet"
                    cost="4,012.45"
                    costPerRate="0.67 (0.22%)"
                  />
                </div>
                <div className="stocks_left_market_cap_pagination_section">
                  <div className="stocks_left_market_cap_pagination_section_arrange_width"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stocks_content_right">
          <div className="stocks_content_right_yourInvestments">
            <div className="stocks_content_right_yourInvestments_title_head">
              <span id="scry_title_text">Your Investments</span>
              <span id="scry_more">
                <button>Dashboard</button>
              </span>
            </div>
            <div className="stocks_content_right_yourInvestments_card_main">
              <div className="stocks_content_right_yourInvestments_card_main_total_return">
                <span id="stocks_content_right_yourInvestments_card_main_total_return_rupees">
                  ₹0
                </span>
                <span id="stocks_content_right_yourInvestments_card_main_total_return_title">
                  Total Returns
                </span>
              </div>
              <div className="stocks_content_right_yourInvestments_card_main_current_value">
                <span id="stocks_content_right_yourInvestments_card_main_current_value_rupees">
                  ₹0
                </span>
                <span id="stocks_content_right_yourInvestments_card_main_current_value_title">
                  Current Value
                </span>
              </div>
            </div>
          </div>

          {/* coming soon feature */}

          {/* <div className="stocks_content_right_watchLists">
                        <div className="stocks_content_right_watchLists_title_head">
                            <span id='scrw_title_text'>All watchlists</span>
                            <span id='scrw_more'>View all</span>
                        </div>
                        <div className="stocks_content_right_watchLists_card_main">

                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Stocks;
