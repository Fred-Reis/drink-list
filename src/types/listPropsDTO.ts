export interface ListItemProps {
  name: string;
  glass: string;
  category: string;
  ingredients: Ingredient[];
  garnish: string;
  preparation: string;
}

export interface Ingredient {
  unit?: string;
  amount?: number;
  ingredient?: string;
  special?: string;
  label?: string;
}
