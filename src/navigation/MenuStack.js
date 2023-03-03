import MenuListScreen from "../screens/menu/MenuListScreen";
import PollSurveyScreen from "../screens/menu/PollSurveyScreen";
import DonationScreen from "../screens/menu/DonationScreen";
import VolunteeringScreen from "../screens/menu/VolunteeringScreen";
import MentorshipScreen from "../screens/menu/MentorshipScreen";
import JobListingsScreen from "../screens/menu/JobListingsScreen";
import AnnouncementsScreen from "../screens/menu/AnnouncementsScreen";
import EventsScreen from "../screens/menu/EventsScreen";
import MeetingsScreen from "../screens/menu/MeetingsScreen";
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
