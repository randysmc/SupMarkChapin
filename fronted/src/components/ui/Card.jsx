export function Card({ children, className }) {
    return (
      <div className={`bg-zinc-700 p-10 rounded-md ${className}`}>{children}</div>
    );
  }
  
  export default Card;