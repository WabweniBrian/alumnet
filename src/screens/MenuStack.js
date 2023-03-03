import MenuListScreen from "./menu/MenuListScreen";
import PollSurveyScreen from "./menu/PollSurveyScreen";
import DonationScreen from "./menu/DonationScreen";
import VolunteeringScreen from "./menu/VolunteeringScreen";
import MentorshipScreen from "./menu/MentorshipScreen";
import JobListingsScreen from "./menu/JobListingsScreen";
import AnnouncementsScreen from "./menu/AnnouncementsScreen";
import EventsScreen from "./menu/EventsScreen";
import MeetingsScreen from "./menu/MeetingsScreen";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

export const MenuStack = () => (
  <Stack.Navigator
    initialRouteName="MenuList"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#982529",
      },
      headerTintColor: "#fff",
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen
      name="MenuList"
      component={MenuListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Announcements" component={AnnouncementsScreen} />
    <Stack.Screen name="Meetings" component={MeetingsScreen} />
    <Stack.Screen name="Events" component={EventsScreen} />
    <Stack.Screen name="PollSurvey" component={PollSurveyScreen} />
    <Stack.Screen name="Donation" component={DonationScreen} />
    <Stack.Screen name="Volunteering" component={VolunteeringScreen} />
    <Stack.Screen name="Mentorship" component={MentorshipScreen} />
    <Stack.Screen name="JobListings" component={JobListingsScreen} />
  </Stack.Navigator>
);
