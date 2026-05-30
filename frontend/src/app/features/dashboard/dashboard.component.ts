import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../safe-url.pipe';

interface ReportPage {
  label: string;
  name: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private readonly reportId = '3304e379-992a-4a54-be9c-32447b293e63';
  private readonly ctid     = 'b7bd4715-4217-48c7-919e-2ea97f592fa7';

  pages: ReportPage[] = [
    { label: 'Vue Générale',    name: '783952a9448b7b3fd654' },
    { label: 'Analyse Retards', name: '7349d1d752afd0d7f5da' },
    { label: 'Customer Risk',   name: 'ee03abbe5c8bb3ed7b3a' },
  ];

  selectedPage: ReportPage = this.pages[0];

  ngOnInit(): void {}

  selectPage(page: ReportPage): void {
    this.selectedPage = page;
  }

  getEmbedUrl(): string {
    return (
      `https://app.powerbi.com/reportEmbed` +
      `?reportId=${this.reportId}` +
      `&pageName=${this.selectedPage.name}` +
      `&autoAuth=true` +
      `&ctid=${this.ctid}`
    );
  }
}
