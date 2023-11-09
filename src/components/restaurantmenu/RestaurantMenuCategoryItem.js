import React from 'react'
import { REST_MENU_IMG_URL } from '../../utils/constants';

const RestaurantMenuCategoryItem = ({list}) => {
  return (
    <div>
        {list.map((item)=>(
            <div
             key={item.card.info.id} className='p-2 m-2  border-gray-400 border-b-2 text-left flex justify-between'>
              
              <div className='w-9/12'>
                <div className='font-semibold'>
                  <span>{item.card.info.name}</span>
                  <br/>
                <span>Rs.{item.card.info.price?item.card.info.price/100 :item.card.info.defaultPrice/100}</span>
                </div>
                    <p className='text-sm'>{item.card.info.description}</p>
                </div>
                 <div className='w-3/12 mx-3 my-6'>
              <img src={REST_MENU_IMG_URL+item.card.info.imageId}></img>
                  <div className=' absolute'>
                  <button className='p-2 bg-slate-200 shadow-lg mx rounded-lg'>Add +</button>
                  </div>
              
              </div>
            </div>
        ))}
    </div>
  )
}

export default RestaurantMenuCategoryItem


// description_text:"the number of clicks on your ads"
// name_text:"Click"
// dataset_text:"google_ads"
// formula:"Total counted clicks on ads"
// // dformulae_text:"sum(clicks)"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"

// description_text:"the number of clicks on your ads"
// name_text:"Clicks"
// dataset_text:"google_ads"
// formula:"Total counted clicks on ads"
// // dformulae_text:"sum(clicks)"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"


// description_text:"How often your ad was shown ona search result page or website"
// name_text:"Impressions"
// dataset_text:"google_ads"
// formula:"Total counted ad displays"
// // dformulae_text:"sum(clicks)"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"

// description_text:"How often your ad was shown ona search result page or website"
// name_text:"Impression"
// dataset_text:"google_ads"
// formula:"Total counted ad displays"
// // dformulae_text:"sum(clicks)"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"


// description_text:"The ratio showing how often people who see your ad end up clicking it"
// name_text:"CTR"
// dataset_text:"google_ads"
// dformulae_text:"(Clicks/Impressions)*100"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"

// description_text:"The ratio showing how often people who see your ad end up clicking it"
// name_text:"Click-through rate(CTR)"
// dataset_text:"google_ads"
// dformulae_text:"(Clicks/Impressions)*100"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"

// description_text:"The average cost you pay each time someone clicks your ad"
// name_text:"CPC"
// dataset_text:"google_ads"
// dformulae_text:"Total cost of clicks/Total number of clicks"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"

// description_text:"The average cost you pay each time someone clicks your ad"
// name_text:"Cost per click(CPC)"
// dataset_text:"google_ads"
// dformulae_text:"Total cost of clicks/Total number of clicks"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"


// description_text:"The percentage of clicks that result in a conversion"
// name_text:"Conversion rate"
// dataset_text:"google_ads"
// dformulae_text:"(Conversion/Clicks)*100"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"


// description_text:"The cost of acquiring a conversion"
// name_text:"Cost per conversion"
// dataset_text:"google_ads"
// dformulae_text:"Total cost/Total number of conversions"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"


// description_text:"The total value driven by conversions"
// name_text:"Conversion value"
// dataset_text:"google_ads"
// dformulae_text:"sum of conversion  values"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"


// description_text:"The amount of revenue earned for every dollar spent on your ads"
// name_text:"ROAS"
// dataset_text:"google_ads"
// dformulae_text:"(Conversion value/cost)*100"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"

// description_text:"The amount of revenue earned for every dollar spent on your ads"
// name_text:"Return on Ad Spend(ROAS)"
// dataset_text:"google_ads"
// dformulae_text:"(Conversion value/cost)*100"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"

// description_text:"The number of impressions you received divided by estimated number of impressions you were eligible to receive"
// name_text:"Impressions Share "
// dataset_text:"google_ads"
// dformulae_text:"(Impressions/Total eligible impressions)*100"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"

// description_text:"The number of impressions you received divided by estimated number of impressions you were eligible to receive"
// name_text:"Impression Share "
// dataset_text:"google_ads"
// dformulae_text:"(Impressions/Total eligible impressions)*100"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"

// description_text:"An estimate of the quality of your ads,keywords,and landing pages"
// name_text:"Quality Score"
// dataset_text:"google_ads"
// dformulae_text:"Calculated  by Google Ads based on CTR,ad relevance,abd landing page experience"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"

// description_text:"The cost per 100 impressions"
// name_text:"CPM"
// dataset_text:"google_ads"
// dformulae_text:"(Total cost/Impressions)*1000"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"

// description_text:"The cost per 100 impressions"
// name_text:"Cost per mile(CPM)"
// dataset_text:"google_ads"
// dformulae_text:"(Total cost/Impressions)*1000"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"

// description_text:"The average cost for each acquisition"
// name_text:"CPA"
// dataset_text:"google_ads"
// dformulae_text:"Total cost/total number of acquisition"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"

// description_text:"The average cost for each acquisition"
// name_text:"Cost per acquisition(CPA)"
// dataset_text:"google_ads"
// dformulae_text:"Total cost/total number of acquisition"
// type_text:"metrics"
// _id:"1698059073785x728919494580240400"