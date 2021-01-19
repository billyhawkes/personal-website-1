import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

const StyledIndex = styled.div`
    height: 1000px;
`

export default function Home() {
    return (
        <Layout>
            <StyledIndex>Hello world!</StyledIndex>
        </Layout>
    )
}
