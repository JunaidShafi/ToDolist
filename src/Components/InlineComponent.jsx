import styles from "./InlineComponent.module.css"
export default function InlineComponent() {

    // return <div style={{background:"red",color:"white",fontSize:"xxx-large" ,display:"flex",alignItems:"center",height:"100vh",
    //     justifyContent:"center"}}>This is my First Styled Component Centered in Webpage</div>;
    return <h1 className={styles.header}> This is External Style </h1>
}