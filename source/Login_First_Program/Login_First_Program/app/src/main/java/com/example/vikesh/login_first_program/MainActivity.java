package com.example.vikesh.login_first_program;

import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    public Button login_click;
    public EditText login_Password,login_Name;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        login_Name=(EditText)findViewById(R.id.login_Name);
        login_Password=(EditText)findViewById(R.id.login_Password);
        login_click=(Button)findViewById(R.id.login_click);
       /*login_click.setOnClickListener(this);*/
login_click.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        onClickFunction(v);
    }
});
        Log.d("hello", "hello***");
        Log.d("Name***",login_Name.toString());

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
    }
public void onClickFunction(View v)
{
if(login_Name.getText().toString().equals("abc")&&login_Password.getText().toString().equals("abc"))
{
    startActivity(new Intent(this, redirection.class));
}
else
{
    Toast.makeText(getApplicationContext(), "Wrong Details", Toast.LENGTH_LONG).show();
}

}
   /* @Override  /*correct directing
    public void onClick(View v) {
     if(v.getId()== R.id.login_click)
     {

         startActivity(new Intent(this, redirection.class));
     }
    }*/

/*   public void onClickFunction(View v) {

            if(login_Name.toString().equals("abc") || login_Password.toString().equals("abc")) {

                startActivity(new Intent(this, redirection.class));
            }
            else
            {
                Toast.makeText(getApplicationContext(), "Wrong Details", Toast.LENGTH_LONG).show();
            }
        }*/

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }


}
