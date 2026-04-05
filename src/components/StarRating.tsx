interface StarRatingProps {
    rating: number;
    maxRating?: number;
    size?: 'sm' | 'md' | 'lg';
    interactive?: boolean;
    onRate?: (rating: number) => void;
  }
  
  export const StarRating = ({ 
    rating, 
    maxRating = 5, 
    size = 'md', 
    interactive = false,
    onRate 
  }: StarRatingProps) => {
    const sizeClass = size === 'sm' ? 'fs-6' : size === 'lg' ? 'fs-3' : 'fs-5';
    
    const handleClick = (index: number) => {
      if (interactive && onRate) {
        onRate(index + 1);
      }
    };
  
    return (
      <div className="d-flex gap-1">
        {[...Array(maxRating)].map((_, index) => (
          <i
            key={index}
            className={`bi ${index < rating ? 'bi-star-fill text-gold' : 'bi-star text-muted'} ${sizeClass} ${interactive ? 'cursor-pointer' : ''}`}
            onClick={() => handleClick(index)}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
          ></i>
        ))}
      </div>
    );
  };