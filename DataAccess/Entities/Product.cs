namespace DataAccess.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public double Price { get; set; }
        public string Category { get; set; }
        public string Diet { get; set; }
        public string ImgRef { get; set; }
        public string Description { get; set; }
        public string Ingredients { get; set; }
        public string Cuisine { get; set; }
    }
}
