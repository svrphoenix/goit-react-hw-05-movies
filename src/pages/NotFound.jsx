import { Layout } from 'components/Layout/Layout';
import { Button } from 'components/Button/Button.styled';
import { Section } from 'components/Section/Section.styled';

const NotFound = () => {
  return (
    <Section>
      <Layout>
        <h3>Page not found</h3>
        <Button to={'/'}>Back to Home</Button>
      </Layout>
    </Section>
  );
};

export default NotFound;
