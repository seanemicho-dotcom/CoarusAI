import IntakeForm from '../IntakeForm';

export default function IntakeFormExample() {
  return (
    <div className="p-8">
      <IntakeForm onSubmit={(type, need) => console.log('Submitted:', type, need)} />
    </div>
  );
}
