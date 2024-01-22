import { createSlice } from "@reduxjs/toolkit"


const objectSearchRequestSlice = createSlice({
    name: "objectSearchRequest",
    initialState: {
        search: 
        {
          "issueDateInterval": {
            "startDate": "",
            "endDate": ""
          },
          "searchContext": {
            "targetSearchEntitiesContext": {
              "targetSearchEntities": [
                {
                  "type": "company",
                  "sparkId": null,
                  "entityId": null,
                  "inn": 0,
                  "maxFullness": true,
                  "inBusinessNews": null
                }
              ],
              "onlyMainRole": true,
              "tonality": "any",
              "onlyWithRiskFactors": false,
              "riskFactors": {
                "and": [],
                "or": [],
                "not": []
              },
              "themes": {
                "and": [],
                "or": [],
                "not": []
              }
            },
            "themesFilter": {
              "and": [],
              "or": [],
              "not": []
            }
          },
          "searchArea": {
            "includedSources": [],
            "excludedSources": [],
            "includedSourceGroups": [],
            "excludedSourceGroups": []
          },
          "attributeFilters": {
            "excludeTechNews": true,
            "excludeAnnouncements": true,
            "excludeDigests": true
          },
          "similarMode": "duplicates",
          "limit": 0,
          "sortType": "sourceInfluence",
          "sortDirectionType": "desc",
          "intervalType": "month",
          "histogramTypes": [
            "totalDocuments",
            "riskFactors"
          ]
        },
        ready: false,
        searchStart: 0
    },
    reducers: {
        setSearchRequest(state, action) {
          let value = action.payload.value
            if (action.payload.target == "INN")
            {
              value = parseInt(value.replace(/\s/g, ""))
              state.search.searchContext.targetSearchEntitiesContext.targetSearchEntities[0].inn = value
            }
            if (action.payload.target == "limit")
            {
              value = parseInt(value)
              state.search.limit = value
            }            
            if (action.payload.target == "tonality")
            {
              state.search.searchContext.targetSearchEntitiesContext.tonality = value
            }
            if (action.payload.target == "dateStart")
            {
              state.search.issueDateInterval.startDate = value
            }
            if (action.payload.target == "dateEnd")
            {
              state.search.issueDateInterval.endDate = value
            }
            if (action.payload.target == "excludeDigests")
            {
              state.search.attributeFilters.excludeDigests = !value
            }
            if (action.payload.target == "excludeAnnouncements")
            {
              state.search.attributeFilters.excludeAnnouncements = !value
            }
            if (action.payload.target == "excludeTechNews")
            {
              state.search.attributeFilters.excludeTechNews = !value
            }
            if (action.payload.target == "onlyWithRiskFactors")
            {
              state.search.searchContext.targetSearchEntitiesContext.onlyWithRiskFactors = value
            }
            if (action.payload.target == "onlyMainRole")
            {
              state.search.searchContext.targetSearchEntitiesContext.onlyMainRole = value
            }
            if (action.payload.target == "inBusinessNews")
            {
              state.search.searchContext.targetSearchEntitiesContext.targetSearchEntities[0].inBusinessNews = value
            }
            if (action.payload.target == "maxFullness")
            {
              state.search.searchContext.targetSearchEntitiesContext.targetSearchEntities[0].maxFullness = value
            }
            if (state.search.searchContext.targetSearchEntitiesContext.targetSearchEntities[0].inn && state.search.limit && state.search.issueDateInterval.startDate && state.search.issueDateInterval.endDate) 
            {
              state.ready = true
            } else {state.ready = false}
        },
        setSearchStart(state, action) {
          state.searchStart = action.payload
        }
    }
});

export const { setSearchRequest, setSearchStart } = objectSearchRequestSlice.actions;

export default objectSearchRequestSlice.reducer;