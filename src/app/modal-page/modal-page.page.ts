import { Component, OnInit, Input } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { createWorker } from 'tesseract.js';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  @Input() public image: string;
  imagetext: string;

  constructor(private nav: NavController, private cont: ModalController, private loadingController: LoadingController) {
    this.presentLoading();
    this.cardOCR();
  }

  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  async cardOCR() {
    const worker = createWorker({
      logger: m => console.log(m)
    });
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(this.image);
    console.log(text);
    await worker.terminate();
    this.loadingController.dismiss();
    this.imagetext = text;
  }

  dismiss(): void {
    this.cont.dismiss();
  }
}
