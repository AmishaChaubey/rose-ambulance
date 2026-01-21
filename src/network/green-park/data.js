// data.js - Contains all content data for banner sections

export const aboutPageData = {
  banner: {
    backgroundImage: 'https://i.pinimg.com/736x/61/73/7f/61737f48a947be2e663260d018c887a2.jpg',
    title: 'Welcome to Our Platform',
    subtitle: 'Innovating Solutions for Tomorrow\'s Challenges'
  },
  
  breadcrumb: {
    homeLink: '/',
    homeText: 'Home',
    currentPageText: 'About'
  },
  
  introduction: {
    sectionLabel: 'Who We Are',
    title: 'Introduction',
    description: 'Discover the story behind our passion for innovation and excellence',
    
    content: {
      row1: {
        text1: {
          before: 'Welcome to our platform, where ',
          highlight: 'innovation meets excellence',
          after: '. We are dedicated to providing cutting-edge solutions that transform the way businesses operate and grow in today\'s dynamic digital landscape.',
          footer: 'Trusted by industry leaders'
        },
        text2: {
          before: 'Our journey began with a simple yet powerful vision: to create technology that empowers people and organizations to achieve their goals more ',
          highlight: 'efficiently and effectively',
          after: '.'
        },
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
        imageAlt: 'Team collaboration'
      },
      
      row2: {
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
        imageAlt: 'Innovation and technology',
        text1: {
          before: 'Over the years, we have built a reputation for delivering ',
          highlight: 'reliable, innovative, and user-friendly',
          after: ' solutions that make a real difference.'
        },
        text2: {
          main: 'With a team of passionate professionals and a commitment to continuous improvement, we strive to stay at the forefront of technological advancement.',
          footer: 'Our approach combines deep industry expertise with creative problem-solving to deliver results that exceed expectations.'
        }
      }
    },
    
    distinctiveSection: {
      title: 'What Sets Us Apart',
      badge: 'Leading with purpose',
      description: {
        before: 'We believe in building lasting relationships with our clients through ',
        highlight: 'transparency, integrity, and exceptional service',
        after: '. Every project we undertake is an opportunity to demonstrate our commitment to quality and our passion for innovation.'
      },
      features: [
        {
          icon: '🎯',
          title: 'Excellence',
          titleColor: '#1e4d83',
          description: 'Uncompromising quality in everything we do, from concept to delivery',
          bgGradient: 'from-blue-50 to-white',
          borderColor: 'border-blue-100/50',
          hoverGradient: 'from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-transparent'
        },
        {
          icon: '💡',
          title: 'Innovation',
          titleColor: '#a81514',
          description: 'Pushing boundaries with creative solutions that drive real change',
          bgGradient: 'from-red-50 to-white',
          borderColor: 'border-red-100/50',
          hoverGradient: 'from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-transparent'
        },
        {
          icon: '🤝',
          title: 'Partnership',
          titleColor: '#1e4d83',
          description: 'Building relationships that last through trust and mutual success',
          bgGradient: 'from-blue-50 to-white',
          borderColor: 'border-blue-100/50',
          hoverGradient: 'from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-transparent'
        }
      ]
    }
  }
};



