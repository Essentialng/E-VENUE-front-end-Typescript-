import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/root/root";
import { DynamicVenue } from "./components/venue/dynamicVenue";
import About from "./pages/about";
import Blacklist from "./pages/blacklist";
import { CreateAnEvent } from "./pages/createAnEvent";
import { CreateGroup } from "./pages/createGroup";
import { DyanmicGroups } from "./pages/dyanmicGroups";
import { DynamicServiceProvides } from "./pages/dynamicEservice";
import { DynamicEvent } from "./pages/dynamicEvent";
import { DynamicShortVideos } from "./pages/dynamicShortVids";
import { DynamicStories } from "./pages/dynamicStories";
import EventServices from "./pages/eventServices";
import EventShowcase from "./pages/eventShowcase";
import { Groups } from "./pages/groups";
import Home from "./pages/home";
import Login from "./pages/login";
import { MyListings } from "./pages/myListings";
import { Profile } from "./pages/profile";
import { ProfileMedia } from "./pages/profileMedia";
import { ProfilePost } from "./pages/profilePost";
import { ShortVideos } from "./pages/shortVideos";
import { ShortVideoUploadForm } from "./pages/shortVideoUpload";
import SignUp from "./pages/signUp";
import Ticketing from "./pages/ticketing";
import Venues from "./pages/venues";
import DynamicChat from "./pages/dynamicChat";
import { DynamicChatWrapper } from "./pages/dynamicChatWrapper";
import { ProfileMessages } from "./pages/messages";
import { CreateService } from "./pages/createService";
import { ViewByLocation } from "./components/venue/viewByLocation";
import { ViewByCategory } from "./components/event/viewByCategory";
import { ViewByCategoryV } from "./components/venue/viewByCategory";
import { ViewByAdminEventCategory } from "./components/event/viewByAdminEventCat";
import { ViewByEServiceCat } from "./components/eventServices/viewByEServiceCat";
import { ShowLocationsFullList } from "./components/venue/showLocationsFullList";
import { ShowCategoriesFullList } from "./components/venue/showCategoryFullList";
import { ShowAdminEventsCategoriesFullList } from "./components/venue/showCatByEvenueFullList";
import { EServiceCategoryFullList } from "./components/eventServices/getCatByService";
import { DynamicReviews } from "./pages/dynamicReviews";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function App() {
  const [tokenState, setTokenState] = useState(
    Cookies.get("token") ? true : false
  );

  useEffect(() => {
    setTokenState(Cookies.get("token") ? true : false);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Root
            setTokenState={setTokenState}
            tokenState={tokenState}
          />
        }
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="/venues"
          element={<Venues />}
        />
        <Route
          path="/ticketing"
          element={<Ticketing />}
        />
        <Route
          path="/event-services"
          element={<EventServices />}
        />
        <Route
          path="/event-showcase"
          element={<EventShowcase />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/blacklist"
          element={<Blacklist />}
        />
        <Route
          path="/sign-up"
          element={<SignUp />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        {/*others*/}
        <Route
          path="*"
          element={<p>There's nothing here: 404!</p>}
        />
        <Route
          path="/events/:event_id"
          element={<DynamicEvent />}
        />
        <Route
          path="/venues/:venue_id"
          element={<DynamicVenue />}
        />
        <Route
          path="/create-event"
          element={<CreateAnEvent />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/profile/my-listings"
          element={<MyListings />}
        />
        <Route
          path="/profile/post"
          element={<ProfilePost />}
        />
        <Route
          path="/profile/media"
          element={<ProfileMedia />}
        />
        <Route
          path="/profile/messages"
          element={<ProfileMessages />}
        />
        <Route
          path="/short-videos"
          element={<ShortVideos />}
        />
        <Route
          path="/short-videos/:video_id"
          element={<DynamicShortVideos />}
        />
        <Route
          path="/upload-short-videos"
          element={<ShortVideoUploadForm />}
        />
        <Route
          path="/stories/:story_id"
          element={<DynamicStories />}
        />
        <Route
          path="/groups"
          element={<Groups />}
        />
        <Route
          path="/groups/create"
          element={<CreateGroup />}
        />
        <Route
          path="/groups/:group_id"
          element={<DyanmicGroups />}
        />
        <Route
          path="/event-services/:eservice_id"
          element={<DynamicServiceProvides />}
        />
        <Route
          path="/chat/:recipient_id/:first_name"
          element={<DynamicChatWrapper />}
        />
        <Route
          path="/e-service/create-service"
          element={<CreateService />}
        />
        {/* <Route
          path="/events/q/:category_view"
          element={<ViewByCategory />}
        /> */}
        <Route
          path="/venues/q/:location_identifier"
          element={<ViewByLocation />}
        />
        <Route
          path="/venues/ci/:category_identifier"
          element={<ViewByCategoryV />}
        />
        <Route
          path="/event/ev/:category_identifier"
          element={<ViewByAdminEventCategory />}
        />
        <Route
          path="/event-services/q/:category_identifier"
          element={<ViewByEServiceCat />}
        />
        {/* Full list of oga's designs */}
        <Route
          path="/event-centres/full-list"
          element={<ShowLocationsFullList />}
        />
        <Route
          path="/by-eVenue/full-list"
          element={<ShowAdminEventsCategoriesFullList />}
        />
        <Route
          path="/event-services/full-list"
          element={<EServiceCategoryFullList />}
        />
        <Route
          path="/reviews/:service_id/:business_name"
          element={<DynamicReviews />}
        />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
