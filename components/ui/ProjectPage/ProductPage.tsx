'use client';

import { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../Dropdown/Dropdown';
import { Button } from '../ButtonV2/Button';

// Define a type for the image object if necessary
type Image = {
  url: string;
  alt?: string;
};

type StyleOption = {
  id: number;
  name: string;
  imageUrl: string;
};

const styleOptions: StyleOption[] = [
  // Populate this array with your style options
  {
    id: 1,
    name: 'Image 1',
    imageUrl:
      'https://res.cloudinary.com/vedanthdev/image/upload/v1711872586/comfy/bar_ykdtk9.jpg'
  },
  {
    id: 1,
    name: 'Image 1',
    imageUrl:
      'https://res.cloudinary.com/vedanthdev/image/upload/v1711872586/comfy/bar_ykdtk9.jpg'
  },
  {
    id: 1,
    name: 'Image 1',
    imageUrl:
      'https://res.cloudinary.com/vedanthdev/image/upload/v1711872586/comfy/bar_ykdtk9.jpg'
  },
  {
    id: 1,
    name: 'Image 1',
    imageUrl:
      'https://res.cloudinary.com/vedanthdev/image/upload/v1711872586/comfy/bar_ykdtk9.jpg'
  },
  {
    id: 1,
    name: 'Image 1',
    imageUrl:
      'https://res.cloudinary.com/vedanthdev/image/upload/v1711872586/comfy/bar_ykdtk9.jpg'
  },
  {
    id: 1,
    name: 'Image 1',
    imageUrl:
      'https://res.cloudinary.com/vedanthdev/image/upload/v1711872586/comfy/bar_ykdtk9.jpg'
  },
  {
    id: 1,
    name: 'Image 1',
    imageUrl:
      'https://res.cloudinary.com/vedanthdev/image/upload/v1711872586/comfy/bar_ykdtk9.jpg'
  },
  {
    id: 1,
    name: 'Image 1',
    imageUrl:
      'https://res.cloudinary.com/vedanthdev/image/upload/v1711872586/comfy/bar_ykdtk9.jpg'
  },
  {
    id: 1,
    name: 'Image 1',
    imageUrl:
      'https://res.cloudinary.com/vedanthdev/image/upload/v1711872586/comfy/bar_ykdtk9.jpg'
  },
  {
    id: 1,
    name: 'Image 1',
    imageUrl:
      'https://res.cloudinary.com/vedanthdev/image/upload/v1711872586/comfy/bar_ykdtk9.jpg'
  }
];

const ProductPage: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(4);
  const [images, setImages] = useState<Image[]>([
    // Example images
    {
      url: 'https://res.cloudinary.com/vedanthdev/image/upload/v1711872586/comfy/bar_ykdtk9.jpg',
      alt: 'Image 1'
    },
    {
      url: 'https://res.cloudinary.com/vedanthdev/image/upload/v1711872586/comfy/bar_ykdtk9.jpg',
      alt: 'Image 1'
    },
    {
      url: 'https://res.cloudinary.com/vedanthdev/image/upload/v1711872586/comfy/bar_ykdtk9.jpg',
      alt: 'Image 1'
    },
    {
      url: 'https://res.cloudinary.com/vedanthdev/image/upload/v1711872586/comfy/bar_ykdtk9.jpg',
      alt: 'Image 1'
    },
    {
      url: 'https://res.cloudinary.com/vedanthdev/image/upload/v1711872586/comfy/bar_ykdtk9.jpg',
      alt: 'Image 1'
    },
    {
      url: 'https://res.cloudinary.com/vedanthdev/image/upload/v1711872586/comfy/bar_ykdtk9.jpg',
      alt: 'Image 1'
    },
    {
      url: 'https://res.cloudinary.com/vedanthdev/image/upload/v1711872586/comfy/bar_ykdtk9.jpg',
      alt: 'Image 1'
    }
    // Add more images as needed
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStyles, setFilteredStyles] =
    useState<StyleOption[]>(styleOptions);

  useEffect(() => {
    const filtered = styleOptions.filter((option) =>
      option.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStyles(filtered);
  }, [searchTerm]);

  // Function to return Tailwind grid class based on slider value
  const gridClass = (value: number): string => {
    switch (value) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-2';
      case 3:
        return 'grid-cols-3';
      case 4:
        return 'grid-cols-4';
      case 5:
        return 'grid-cols-5';
      default:
        return 'grid-cols-1';
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 p-4 overflow-auto">
        {/* Left Column */}
        <div className="flex flex-col">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="w-full" variant="outline">
                Select Interior Style
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuLabel className="w-full">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="w-full">Profile</DropdownMenuItem>
              <DropdownMenuItem className="w-full">Billing</DropdownMenuItem>
              <DropdownMenuItem className="w-full">Team</DropdownMenuItem>
              <DropdownMenuItem className="w-full">
                Subscription
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="sticky bottom-0 p-4">
          {/* Footer Button */}
          {/* <Button
            variant="slim"
            type="button"
            className="mt-1"
            width={'100%'}
            // loading={isSubmitting}
            // disabled={disableButton}
          >
            Generate
          </Button> */}
        </div>
      </div>

      <div className="w-3/4 flex flex-col">
        {/* Right Column */}
        <div className="p-4 border-b">
          <input
            type="range"
            min={1}
            max={5}
            value={sliderValue}
            onChange={(e) => setSliderValue(parseInt(e.target.value))}
            className="slider"
          />
          <span>Columns: {sliderValue}</span>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <div className={`grid ${gridClass(sliderValue)} gap-4`}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt || `Image ${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
