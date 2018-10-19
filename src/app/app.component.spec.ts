import { RouterTestingModule } from "@angular/router/testing";
import { createComponent } from "ngx-testing-library";
import { AppComponent } from "./app.component";

it("should exist", async () => {
  const { getByTestId } = await createComponent(
    { component: AppComponent },
    { declarations: [AppComponent], imports: [RouterTestingModule] }
  );

  expect(getByTestId("title")).toBeDefined();
});

it("should contain title 'Welcome to test!", async () => {
  const { getByTestId } = await createComponent(
    {
      component: AppComponent,
      parameters: {
        title: "test"
      }
    },
    {
      declarations: [AppComponent],
      imports: [RouterTestingModule]
    }
  );
  expect(getByTestId("title").textContent).toContain("Welcome to test!");
});
