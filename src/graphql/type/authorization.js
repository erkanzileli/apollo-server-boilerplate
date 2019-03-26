export default `
directive @auth(requires: Role = ADMIN) on OBJECT | FIELD_DEFINITION

enum Role {
    ADMIN
    REVIEWER
    USER
}
`
