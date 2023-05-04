import styled from '@emotion/styled'

export const EditUserContainer = styled.div`
  cursor: default;

  .fixedData {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    padding: 0 35px 25px;

    .left {
      display: grid;
      column-gap: 15px;
      grid-template-columns: 100px 1fr;
      line-height: 1.2;

      img {
        display: block;
        grid-row: 1 / span 2;
        width: 100%;
      }

      .name {
        align-self: end;
        font-size: ${({ theme }) => theme.app.size.font.large};
        font-weight: 800px;
      }
      .username {
        color: ${({ theme }) => theme.app.palette.gray1};
        font-size: ${({ theme }) => theme.app.size.font.medium};
        font-weight: 600px;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 1.4;
    }
  }

  .edit-user-form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 25px 0;
    border-top: 1px solid ${({ theme }) => theme.app.palette.gray1};
    border-bottom: 1px solid ${({ theme }) => theme.app.palette.gray1};

    .inputs {
      display: grid;
      gap: 10px;
      grid-template-columns: auto 1fr auto 1fr;

      label {
        display: block;
        align-self: center;
        width: 60px;
        text-align: right;
      }

      input {
        margin-right: 35px;
      }
    }

    button {
      width: 80px;
      margin-top: 25px;
    }
  }

  .editRole {
    padding: 25px 0 0;

    .editor-toggle {
      display: flex;
      gap: 10px;
      font-size: ${({ theme }) => theme.app.size.font.small};

      p {
        display: flex;
        align-items: center;
        gap: 5px;
        font-weight: 600;
        cursor: pointer;

        .icon {
          font-size: 12px;
        }
      }
      .warn {
        color: ${({ theme }) => theme.app.palette.orange};
      }
    }

    .selet-role {
      display: flex;
      justify-content: center;
      position: relative;
      gap: 150px;
      padding: 25px 80px 0 0px;

      div {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      button {
        position: absolute;
        right: 0px;
        top: 25px;
        width: 80px;
      }
    }
  }
`
