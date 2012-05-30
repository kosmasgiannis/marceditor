<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:marc="http://www.loc.gov/MARC21/slim" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="marc xs" version="1.0">
  <xsl:output indent="yes" encoding="UTF-8"/>

  <xsl:param name="recno" select="''"/>
  <xsl:param name="date" select="''"/>
  <xsl:param name="orgcode" select="''"/>

  <xsl:template match="node() | @*">
    <xsl:copy>
      <xsl:apply-templates select="marc:record"/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="marc:record">
    <marc:record>
    <xsl:apply-templates select="marc:leader"/>

    <xsl:choose>
      <xsl:when test="count(marc:controlfield[@tag=001]) != 0">
        <xsl:apply-templates select="marc:controlfield[@tag=001]"/>
      </xsl:when>
      <xsl:otherwise>
        <xsl:if test="$recno != ''">
          <marc:controlfield tag="001"><xsl:value-of select="$recno"/></marc:controlfield>
        </xsl:if>
      </xsl:otherwise>
    </xsl:choose>

    <xsl:choose>
      <xsl:when test="count(marc:controlfield[@tag='003']) != 0">
        <xsl:apply-templates select="marc:controlfield[@tag='003']"/>
      </xsl:when>
      <xsl:otherwise>
        <xsl:if test="$orgcode != ''">
          <marc:controlfield tag="003"><xsl:value-of select="$orgcode"/></marc:controlfield>
        </xsl:if>
      </xsl:otherwise>
    </xsl:choose>

    <xsl:choose>
      <xsl:when test="count(marc:controlfield[@tag='005']) != 0">
        <xsl:apply-templates select="marc:controlfield[@tag='005']"/>
      </xsl:when>
      <xsl:otherwise>
        <xsl:if test="$date != ''">
          <marc:controlfield tag="005"><xsl:value-of select="$date"/></marc:controlfield>
        </xsl:if>
      </xsl:otherwise>
    </xsl:choose>

    <xsl:apply-templates select="marc:controlfield[(@tag != '001') and (@tag != '003') and (@tag != '005')]"/>
    <xsl:apply-templates select="marc:datafield"/>
    </marc:record>
  </xsl:template>

  <xsl:template match="marc:leader">
    <marc:leader>
      <xsl:value-of select="concat(substring(.,1,9),'a22',substring(.,13))"/>
    </marc:leader>
  </xsl:template>

  <xsl:template match="marc:controlfield">
    <xsl:choose>
      <xsl:when test="(@tag = '001')">
        <xsl:if test="$recno != ''">
          <marc:controlfield tag="001"><xsl:value-of select="$recno"/></marc:controlfield>
        </xsl:if>
      </xsl:when>
      <xsl:when test="(@tag = '003')">
        <xsl:if test="$orgcode != ''">
          <marc:controlfield tag="003"><xsl:value-of select="$orgcode"/></marc:controlfield>
        </xsl:if>
      </xsl:when>
      <xsl:when test="(@tag = '005')">
        <xsl:if test="$date != ''">
          <marc:controlfield tag="005"><xsl:value-of select="$date"/></marc:controlfield>
        </xsl:if>
      </xsl:when>
      <xsl:otherwise>
        <xsl:copy-of select="."/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="marc:datafield">
    <xsl:copy-of select="."/>
  </xsl:template>

</xsl:stylesheet>
