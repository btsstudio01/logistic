import {
  createSlice,
  // configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
// import { AsYouType } from "libphonenumber-js/min";
// import React from "react";
import axios from "axios";
// import { useSelector } from "react-redux";

export const getSeaFreightLCLcharges = createAsyncThunk(
  "data/getSeaFreightLCLcharges",
  async (weight) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_CALCULATOR}trade/getSeaFreightChargesLCL`,
        weight
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getSeaFreightcharges = createAsyncThunk(
  "data/getseafreight",
  async (weight) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_CALCULATOR}trade/getSeaFreightCharges`,
        weight
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getFreightcharges = createAsyncThunk(
  "data/getfreight",
  async (weight) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_CALCULATOR}trade/getFreightCharges`,
        weight
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const dhlcharges = createAsyncThunk("data/fetchData", async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_CALCULATOR}trade/getExpressCharges`,
      data
    );

    return response.data.data;
  } catch (error) {
    throw error;
  }
});
const globalData = createSlice({
  name: "Data",
  initialState: {
    data: {
      userId: null,
      tradeType: 0, //Import & Export
      serviceType: 1, //Air land
      serviceTypeOpt: null, //freight, express
      shipperDetails: {
        sen_companyName: "",
        sen_companyEmail: "",
        sen_contactPersonName: "",
        sen_contactPersonNumber: "",
        sen_country: "",
        sen_city: "",
        sen_phoneNumber: "",
        sen_districtArea: "",
        sen_buildingName: "",
        sen_nearestLandmark: "",
      },
      recieverDetails: {
        rec_companyName: "",
        rec_companyEmail: "",
        rec_contactPersonName: "",
        rec_contactPersonNumber: "",
        rec_country: "",
        rec_city: "",
        rec_phoneNumber: "",
        rec_districtArea: "",
        rec_buildingName: "",
        rec_nearestLandmark: "",
      },
      shipmentDetails: {
        pickup: null,
        dropoff: null,
        pickupCity: null,
        dropoffCity: null,
        pickUpAddress: "",
        dropOfAddress: "",
        dropoffSeaport: null,
        pickupSeaport: null,

        dropoffAirport: null,
        pickupAirport: null,

        container: {
          type: "",
          size: "",
        }, //Only in sea
        commodity: {
          type: "",
          subType: "",
        },
        timebound: false,
        timeboundPickUpDate: null,
        timeboundDropOffDate: null,
        tradeItem: [],

        termofshipment: 4,

        noofpackages: 1,
        totalweight: 0,
        totalcbm: 0,
        totalVolumetricWeight: 0,
        chargeableWeight: 0,
        transportCompany: 1,
        // validitydate: "",
        // overweight: false,
        // oversize: false,
        // insured: null,
        // locationPrice: 0,

        distance: 0,
        // hazardous: false,

        quoteresponsedata: null,
        quotePrice: null,
      },
      selectedService: { key: null },

      charges: [],
      airfreightcharges: {},
      seafreightcharges: {},
      seafreightlclcharges: {},
      loader: false,
    },

    loading: "idle",
    error: null,
  },

  reducers: {
    updateData(state, action) {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(dhlcharges.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(dhlcharges.fulfilled, (state, action) => {
        state.loading = "succeeded";

        state.data.charges = [action.payload];
        state.data.shipmentDetails.chargeableWeight =
          action.payload?.items[0]?.chargeableWeight;

        state.data.loader = false;
      })
      .addCase(dhlcharges.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
        state.data.loader = false;
      })
      .addCase(getFreightcharges.fulfilled, (state, action) => {
        state.data.airfreightcharges = action.payload;
      })
      .addCase(getSeaFreightcharges.fulfilled, (state, action) => {
        state.data.seafreightcharges = action.payload;
      })
      .addCase(getSeaFreightLCLcharges.fulfilled, (state, action) => {
        state.data.seafreightlclcharges = action.payload;
      });
  },
});

const dashboardData = createSlice({
  name: "dashboardData",
  initialState: {
    data: { unpaid: null, all: null, active: null, refetch: true },
    airRequests: {
      data: [],
      unpaid: null,
      paid: null,
      all: null,
      active: null,
      timebound: null,
      refetch: true,
    },
    seaRequests: {
      data: [],
      unpaid: null,
      paid: null,
      all: null,
      active: null,
      timebound: null,
      refetch: true,
    },
    cancelledRequests: {
      data: [],
      all: null,
      air: null,
      sea: null,
      refetch: true,
    },
    completedRequests: {
      data: [],
      all: null,
      air: null,
      sea: null,
      refetch: true,
    },
  },
  reducers: {
    updateDashboardData(state, action) {
      console.log(action, "pop");
      console.log(state);
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
    updateAirRequestsData(state, action) {
      console.log(action, "pop");
      console.log(state);
      state.airRequests = {
        ...state.airRequests,
        ...action.payload,
      };
    },
    updateSeaRequestsData(state, action) {
      console.log(action, "pop");
      console.log(state);
      state.seaRequests = {
        ...state.seaRequests,
        ...action.payload,
      };
    },
    updateCancelledRequestsData(state, action) {
      console.log(action.payload, "pop");
      console.log(state);
      state.cancelledRequests = {
        ...state.cancelledRequests,
        ...action.payload,
      };
    },
    updateCompletedRequestsData(state, action) {
      console.log(action, "pop");
      console.log(state);
      state.completedRequests = {
        ...state.completedRequests,
        ...action.payload,
      };
    },
  },
});

export const { updateData } = globalData.actions;
export const {
  updateDashboardData,
  updateAirRequestsData,
  updateSeaRequestsData,
  updateCancelledRequestsData,
  updateCompletedRequestsData,
} = dashboardData.actions;
export default globalData;
export { dashboardData };
