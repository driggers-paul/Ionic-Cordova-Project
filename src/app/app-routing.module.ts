import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  // { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  // { path: 'forgot-password', loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  // { path: 'reset-password/:token', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'daily-tasks', loadChildren: './pages/daily-tasks/daily-tasks.module#DailyTasksPageModule' },
  { path: 'info-gathering', loadChildren: './pages/info-gathering/info-gathering.module#InfoGatheringPageModule' },
  { path: 'profile-page', loadChildren: './pages/profile-page/profile-page.module#ProfilePagePageModule' },
  { path: 'change-password', loadChildren: './pages/change-password/change-password.module#ChangePasswordPageModule' },
  // { path: 'camera', loadChildren: './pages/camera/camera.module#CameraPageModule' },
  { path: 'exercises/:id', loadChildren: './pages/exercise-view/exercise-view.module#ExerciseViewPageModule' },
  { path: 'workouts', loadChildren: './pages/workouts/workouts.module#WorkoutsPageModule' },
  { path: 'trainer-registration', loadChildren: './pages/trainer-registration/trainer-registration.module#TrainerRegistrationPageModule' },
  { path: 'account-settings', loadChildren: './pages/account-settings/account-settings.module#AccountSettingsPageModule' },
  { path: 'weight', loadChildren: './pages/weight/weight.module#WeightPageModule' },
  { path: 'invite', loadChildren: './pages/invite/invite.module#InvitePageModule' },
  { path: 'messages', loadChildren: './pages/messages/messages.module#MessagesPageModule' },
  { path: 'my-transphormers', loadChildren: './pages/my-transphormers/my-transphormers.module#MyTransphormersPageModule' },
  { path: 'body-metrics', loadChildren: './pages/body-metrics/body-metrics.module#BodyMetricsPageModule' },
  { path: 'trainer-messages', loadChildren: './pages/trainer-messages/trainer-messages.module#TrainerMessagesPageModule' },
  { path: 'details/:id', loadChildren: './pages/my-transphormers/details/details.module#DetailsPageModule' },
  { path: 'photos/:id', loadChildren: './pages/my-transphormers/photos/photos.module#PhotosPageModule' },
  { path: 'metrics/:id', loadChildren: './pages/my-transphormers/metrics/metrics.module#MetricsPageModule' },
  { path: 'my-transphormers/:id/nutrition-detail', loadChildren: './pages/my-transphormers/nutrition-detail/nutrition-detail.module#NutritionDetailPageModule' },
  { path: 'subscription', loadChildren: './pages/subscription/subscription.module#SubscriptionPageModule' },
  { path: 'thanks', loadChildren: './pages/subscription/thanks/thanks.module#ThanksPageModule' },
  { path: 'live-streaming', loadChildren: './pages/live-streaming/live-streaming.module#LiveStreamingPageModule' },
  { path: 'photo-listing', loadChildren: './pages/photo-listing/photo-listing.module#PhotoListingPageModule' },
  { path: 'trainer-applications', loadChildren: './pages/trainer-applications/trainer-applications.module#TrainerApplicationsPageModule' },
  { path: 'chat-messages/:id', loadChildren: './pages/chat-messages/chat-messages.module#ChatMessagesPageModule' },
  { path: 'group-messages/:groupName', loadChildren: './pages/chat-messages/chat-messages.module#ChatMessagesPageModule' },
  { path: 'groups', loadChildren: './pages/transphormer-group-messages/transphormer-group-messages.module#TransphormerGroupMessagesPageModule' },
  // { path: 'announcements', loadChildren: './pages/announcements/announcements.module#AnnouncementsPageModule' },
  { path: 'trainer-announcements', loadChildren: './pages/trainer-announcements/trainer-announcements.module#TrainerAnnouncementsPageModule' },
  { path: 'macro', loadChildren: './pages/macro/macro.module#MacroPageModule' },
  { path: 'nutrition', loadChildren: './pages/nutrition/nutrition.module#NutritionPageModule' },
  { path: 'trainer-detail/:id', loadChildren: './pages/trainer-detail/trainer-detail.module#TrainerDetailPageModule' },
  { path: 'trainer-requests', loadChildren: './pages/trainer-requests/trainer-requests.module#TrainerRequestsPageModule' },
  { path: 'custom-food', loadChildren: './pages/custom-food-template/custom-food-template.module#CustomFoodTemplatePageModule' },
  { path: 'help-support', loadChildren: './pages/help-support/help-support.module#HelpSupportPageModule' },
  { path: 'create-announcement', loadChildren: './pages/create-announcement/create-announcement.module#CreateAnnouncementPageModule' },
  { path: 'weight/:id/edit', loadChildren: './pages/edit-weight/edit-weight.module#EditWeightPageModule' },
  { path: 'live-stream', loadChildren: './pages/live-stream/live-stream.module#LiveStreamPageModule' },
  { path: 'live-stream/:id', loadChildren: './pages/video-player/video-player.module#VideoPlayerPageModule' },
  { path: 'modal-test', loadChildren: './pages/camera/modal-test/modal-test.module#ModalTestPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
