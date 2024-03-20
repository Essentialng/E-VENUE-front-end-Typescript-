import { EServiceCategory } from "../eventServices/getCatByEService";
import { GroupSuggestions } from "../groups/suggestions";
import { VenueOrEventAd } from "../home/venueAd";
import { PopularVenues } from "./popularVenues";
import { ShowAdminEventsCategories } from "./showCatByEvenue";
import { ShowLocations } from "./showLocations";
import { ShowCategories } from "./showcategory";
import { BlankVenue } from "./weddingVenues";

export const DefaultBody = () => {
  return (
    <>
      <section>
        <ShowLocations />
      </section>
      <section>
        <ShowCategories />
      </section>
      <section>
        <ShowAdminEventsCategories />
      </section>
      <section>
        <EServiceCategory />
      </section>
      <section>
        <BlankVenue
          identifierValue="wedding"
          title="Popular Wedding venues"
        />
      </section>
      <section>
        <BlankVenue
          identifierValue="boardrooms"
          title="Popular Boardroom venues"
        />
      </section>
      <section>
        <BlankVenue
          identifierValue="academic"
          title="Popular Academic venues"
        />
      </section>
      <section>
        <BlankVenue
          identifierValue="meetings"
          title="Popular Meetings venues"
        />
      </section>
      <section>
        <VenueOrEventAd
          props="Find the, BEST, EVENTS, Happening Around you"
          body="Some random words spanning two to three lines. Guess will have to find out."
          toAttr="events"
        />
      </section>

      <section>
        <PopularVenues />
      </section>
      <section id="group">
        <GroupSuggestions />
      </section>
    </>
  );
};
