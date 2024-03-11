export default function Template({children}: {
    children: React.ReactNode
}) {
    console.log('template')
    return <>
        template
        <div>{children}</div>
    </>
}