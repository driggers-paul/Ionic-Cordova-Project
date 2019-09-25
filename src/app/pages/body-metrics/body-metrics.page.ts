import { Component, OnInit } from '@angular/core';
import { ErrorsService } from '../../services/errors/errors.service';
import {
  LoadingController,
  ToastController,
  NavController
} from '@ionic/angular';
import { Weight, WeightsService } from '../../services/weights/weights.service';
import { Moment } from 'moment';
import * as moment from 'moment';

export interface DisplayWeight extends Weight {
  diff: number;
  diffInDateAsReadable: string;
  momentDate: Moment;
}

@Component({
  selector: 'app-body-metrics',
  templateUrl: './body-metrics.page.html',
  styleUrls: ['./body-metrics.page.scss']
})
export class BodyMetricsPage implements OnInit {
  public weights: DisplayWeight[] = [];
  public Math;

  constructor(
    public errorService: ErrorsService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private weightService: WeightsService,
    private navCtrl: NavController
  ) {
    this.Math = Math;
  }

  ngOnInit() {
    this.setupWeights();
  }

  private async setupWeights() {
    const loader = await this.loadingCtrl.create({
      message: 'Please wait ...'
    });
    await loader.present();

    try {
      const weights = <Weight[]>await this.weightService.listWeights();
      const now = moment();

      this.weights = weights.reduce(
        (carry: DisplayWeight[], weight): DisplayWeight[] => {
          const displayWeight = <DisplayWeight>weight;

          if (now.diff(<Moment>displayWeight.logged_on, 'days') === 0) {
            displayWeight.diffInDateAsReadable = 'Today';
          } else if (now.diff(<Moment>displayWeight.logged_on, 'weeks') !== 0) {
            displayWeight.diffInDateAsReadable = `${now.diff(
              <Moment>displayWeight.logged_on,
              'weeks'
            )} weeks ago`;
          } else {
            displayWeight.diffInDateAsReadable = `${now.diff(
              <Moment>displayWeight.logged_on,
              'days'
            )} days ago`;
          }

          carry.push(displayWeight);

          return carry;
        },
        []
      );
    } catch (e) {
      const toast = await this.toastCtrl.create({
        message: this.errorService.firstError(e),
        duration: 3000,
      });
      await toast.present();
    } finally {
      loader.dismiss();
    }
  }

  public diffInWeight(currentIndex): number {
    if (currentIndex === this.weights.length - 1) {
      return 0;
    } else {
      return (
        -1 *
        (this.weights[currentIndex + 1].weight -
          this.weights[currentIndex].weight)
      );
    }
  }

  public goToAddWeighIn() {
    this.navCtrl.navigateRoot('weight', {
      animationDirection: 'forward',
      animated: true
    });
  }

  public goToEditWeight(weight: Weight) {
    this.navCtrl.navigateRoot(`weight/${weight.id}/edit`);
  }
}
