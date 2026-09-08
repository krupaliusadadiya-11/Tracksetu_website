import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BlogArticle } from '../../../pages/blogs/blog-data';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.css',
})
export class BlogCardComponent {
  @Input({ required: true }) article!: BlogArticle;
}
