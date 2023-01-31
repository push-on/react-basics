```TypeScript 
// what is the difference between this
type fb = {
  obj: {
    id: number;
    rating: number;
    text: string;
  }[];
};

// & this 
type Feedback = {
  id: number;
  rating: number;
  text: string;
};

interface Props {
  fb: Feedback[];
}
```