export default async function Account({ params }: { params: { account: string } }) {
    console.log(params.account, 'account ID');

    const accountFetching = await (await fetch('...')).json();

    return null;
}
