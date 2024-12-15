<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/vk
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:exsl="http://exslt.org/common"
                xmlns:math="http://exslt.org/math"
                xmlns:regexp="http://exslt.org/regular-expressions"
                xmlns:set="http://exslt.org/sets"
                xmlns:str="http://exslt.org/strings"
                extension-element-prefixes="exsl math regexp set str">
  
  <xsl:output method="html" doctype-public="XSLT-compat"/>

  <!-- Template principal -->
  <xsl:template match="/">
    <html>
      <head>
        <title>Catalogue des Livres</title>
      </head>
      <body>
        <h1>Catalogue des Livres</h1>
        <table border="1">
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Prix</th>
          </tr>
          <xsl:for-each select="/catalogue/livre">
            <tr>
              <td><xsl:value-of select="titre"/></td>
              <td><xsl:value-of select="auteur"/></td>
              <td><xsl:value-of select="prix"/></td>
            </tr>
          </xsl:for-each>
        </table>

        <!-- Exemples d'utilisation des fonctions EXSLT -->
        <h2>Utilisation des Fonctions EXSLT</h2>
        
        <!-- Utilisation de exsl:node-set -->
        <xsl:variable name="nodes" select="exsl:node-set('<test>exsl:node-set</test>')"/>
        <p>exsl:node-set: <xsl:value-of select="$nodes/test"/></p>
        
        <!-- Utilisation de math:max -->
        <xsl:variable name="prices" select="/catalogue/livre/prix"/>
        <p>Prix maximum: <xsl:value-of select="math:max($prices)"/></p>
        
        <!-- Utilisation de regexp:replace -->
        <p>Exemple de remplacement: <xsl:value-of select="regexp:replace('Bonjour le monde', 'monde', 'EXSLT')"/></p>
        
        <!-- Utilisation de set:distinct -->
        <xsl:variable name="authors" select="str:split('Jean Dupont,Marie Curie,Jean Dupont','/s*,\s*/')"/>
        <p>Auteurs distincts: <xsl:value-of select="set:distinct($authors)"/></p>
      </body>
    </html>
  </xsl:template>
  
</xsl:stylesheet>
=======
<<<<<<< HEAD
>>>>>>> update
=======
>>>>>>> origin/vk
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:exsl="http://exslt.org/common"
                xmlns:math="http://exslt.org/math"
                xmlns:regexp="http://exslt.org/regular-expressions"
                xmlns:set="http://exslt.org/sets"
                xmlns:str="http://exslt.org/strings"
                extension-element-prefixes="exsl math regexp set str">
  
  <xsl:output method="html" doctype-public="XSLT-compat"/>

  <!-- Template principal -->
  <xsl:template match="/">
    <html>
      <head>
        <title>Catalogue des Livres</title>
      </head>
      <body>
        <h1>Catalogue des Livres</h1>
        <table border="1">
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Prix</th>
          </tr>
          <xsl:for-each select="/catalogue/livre">
            <tr>
              <td><xsl:value-of select="titre"/></td>
              <td><xsl:value-of select="auteur"/></td>
              <td><xsl:value-of select="prix"/></td>
            </tr>
          </xsl:for-each>
        </table>

        <!-- Exemples d'utilisation des fonctions EXSLT -->
        <h2>Utilisation des Fonctions EXSLT</h2>
        
        <!-- Utilisation de exsl:node-set -->
        <xsl:variable name="nodes" select="exsl:node-set('<test>exsl:node-set</test>')"/>
        <p>exsl:node-set: <xsl:value-of select="$nodes/test"/></p>
        
        <!-- Utilisation de math:max -->
        <xsl:variable name="prices" select="/catalogue/livre/prix"/>
        <p>Prix maximum: <xsl:value-of select="math:max($prices)"/></p>
        
        <!-- Utilisation de regexp:replace -->
        <p>Exemple de remplacement: <xsl:value-of select="regexp:replace('Bonjour le monde', 'monde', 'EXSLT')"/></p>
        
        <!-- Utilisation de set:distinct -->
        <xsl:variable name="authors" select="str:split('Jean Dupont,Marie Curie,Jean Dupont','/s*,\s*/')"/>
        <p>Auteurs distincts: <xsl:value-of select="set:distinct($authors)"/></p>
      </body>
    </html>
  </xsl:template>
  
</xsl:stylesheet>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:exsl="http://exslt.org/common"
                xmlns:math="http://exslt.org/math"
                xmlns:regexp="http://exslt.org/regular-expressions"
                xmlns:set="http://exslt.org/sets"
                xmlns:str="http://exslt.org/strings"
                extension-element-prefixes="exsl math regexp set str">
  
  <xsl:output method="html" doctype-public="XSLT-compat"/>

  <!-- Template principal -->
  <xsl:template match="/">
    <html>
      <head>
        <title>Catalogue des Livres</title>
      </head>
      <body>
        <h1>Catalogue des Livres</h1>
        <table border="1">
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Prix</th>
          </tr>
          <xsl:for-each select="/catalogue/livre">
            <tr>
              <td><xsl:value-of select="titre"/></td>
              <td><xsl:value-of select="auteur"/></td>
              <td><xsl:value-of select="prix"/></td>
            </tr>
          </xsl:for-each>
        </table>

        <!-- Exemples d'utilisation des fonctions EXSLT -->
        <h2>Utilisation des Fonctions EXSLT</h2>
        
        <!-- Utilisation de exsl:node-set -->
        <xsl:variable name="nodes" select="exsl:node-set('<test>exsl:node-set</test>')"/>
        <p>exsl:node-set: <xsl:value-of select="$nodes/test"/></p>
        
        <!-- Utilisation de math:max -->
        <xsl:variable name="prices" select="/catalogue/livre/prix"/>
        <p>Prix maximum: <xsl:value-of select="math:max($prices)"/></p>
        
        <!-- Utilisation de regexp:replace -->
        <p>Exemple de remplacement: <xsl:value-of select="regexp:replace('Bonjour le monde', 'monde', 'EXSLT')"/></p>
        
        <!-- Utilisation de set:distinct -->
        <xsl:variable name="authors" select="str:split('Jean Dupont,Marie Curie,Jean Dupont','/s*,\s*/')"/>
        <p>Auteurs distincts: <xsl:value-of select="set:distinct($authors)"/></p>
      </body>
    </html>
  </xsl:template>
  
</xsl:stylesheet>
=======
>>>>>>> update
=======
>>>>>>> origin/vk
>>>>>>> b58451c (mise a jour)
