import { useRouter } from 'next/router';

export default function Results() {
  const router = useRouter();
  const { postmanData, omdbData } = router.query;

  const postmanResults = JSON.parse(postmanData || '[]');
  const omdbResults = JSON.parse(omdbData || '[]');

  return (
    <div>
      <h1>Search Results</h1>
      <h2>Postman Results</h2>
      <pre>{JSON.stringify(postmanResults, null, 2)}</pre>
      <h2>OMDB Results</h2>
      <pre>{JSON.stringify(omdbResults, null, 2)}</pre>
    </div>
  );
}