class Restaurante {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  rate: number;
  featured: boolean;

  constructor(
    id: number,
    title: string,
    category: string,
    description: string,
    image: string,
    rate: number,
    featured: boolean,
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.description = description;
    this.image = image;
    this.rate = rate;
    this.featured = featured;
  }
}

export default Restaurante;
