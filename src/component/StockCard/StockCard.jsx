import { useEffect, useState } from 'react';
import './StocksCard.css';

const StocksCard = ({logoUrl='' ,title='' , cost='' , costPerRate=''})=>{
    const [isCostPerRateNegative , setIsCostPerRateNegative] = useState(false);
    const [isCardAddToWatchList , setIsCardAddToWatchList] = useState(false);

    useEffect(()=>{
        if(costPerRate.length>0){
            for (const element of costPerRate) {
                if(element==='-'){
                    setIsCostPerRateNegative(true);
                    break;
                }else{
                    setIsCostPerRateNegative(false);
                }
            }
        }
    },[costPerRate]);

    return(
        <div className='stocksCard_main'>
            <div className="stocksCard_main_top">
                <div className="stocksCard_main_top_logo_and_add">
                    <div className="stocksCard_main_top_logo">
                        <img src={logoUrl} alt="" />
                    </div>
                    <div className="stocksCard_main_top_add">
                        <div className="stocksCard_main_top_add_arrange_width">
                            <button className="stocksCard_main_top_add_circle" onClick={()=>{setIsCardAddToWatchList(!isCardAddToWatchList)}}>
                                {
                                    isCardAddToWatchList?
                                    <svg xmlns="http://www.w3.org/2000/svg" id='svg_remove' width="28" height="28" viewBox="0 0 24 24" fill="#00B386" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" id='svg_add' width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#00B386" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>

                                }
                            </button>
                        </div>
                    </div>
                </div>
                <div className="stocksCard_main_top_left_title">{title || 'Stock Title'}</div>
                
            </div>
            <div className="stocksCard_main_bottom">
                <div className="stocksCard_main_bottom_cost">₹{ cost || '000.00' }</div>
                <div className="stocksCard_main_bottom_costPerRate" style={{color:isCostPerRateNegative?'#EB5B3C':(costPerRate===''?'#4a4a4a':'#00B386')}}>{costPerRate || '0.00 (0.00%)'}</div>
            </div>
        </div>
    )
}

export default StocksCard;